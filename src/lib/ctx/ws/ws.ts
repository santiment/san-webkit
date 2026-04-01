import { Channel, Socket as PhoenixSocket } from 'phoenix'

export type SocketParams = {
  jti?: string
}

function getSocketUrl() {
  const backendUrl = process.env.BACKEND_URL || 'https://api-stage.santiment.net'
  const socketUrl = new URL('/socket', backendUrl)

  socketUrl.protocol = socketUrl.protocol === 'https:' ? 'wss:' : 'ws:'

  return socketUrl.toString()
}

export class Socket {
  #socket: PhoenixSocket
  #channels = new Map<string, Channel>()
  #joiningChannels = new Map<string, Promise<Channel>>()

  constructor(params: SocketParams = {}) {
    this.#socket = new PhoenixSocket(getSocketUrl(), { params })
    this.#socket.connect()
  }

  async query(topic: string, event: string, payload: object) {
    const chan = await this.#join(topic)

    return await this.#send(chan, event, payload)
  }

  subscribe(topic: string, event: string, clb: (response?: unknown) => void) {
    let isCancelled = false
    let channel: Channel | undefined
    let listenerRef: number | undefined

    this.#join(topic)
      .then((chan) => {
        if (isCancelled) return

        channel = chan
        listenerRef = chan.on(event, clb)
      })
      .catch((err) => {
        if (isCancelled) return

        console.error(`Failed to subscribe to topic ${topic}`, err)
      })

    return () => {
      isCancelled = true

      if (channel && listenerRef !== undefined) {
        channel.off(event, listenerRef)
      }

      this.#leave(topic)
    }
  }

  disconnect() {
    this.#socket.disconnect()
  }

  #send(chan: Channel, event: string, payload: object) {
    return new Promise((resolve, reject) => {
      chan
        .push(event, payload)
        .receive('ok', (result) => resolve(result))
        .receive('error', (err) => reject(err))
        .receive('timeout', () => reject(`${event} timeout`))
    })
  }

  async #join(topic: string) {
    const savedChan = this.#channels.get(topic)
    if (savedChan) return savedChan

    const pendingJoin = this.#joiningChannels.get(topic)
    if (pendingJoin) return pendingJoin

    const channel = this.#socket.channel(topic)
    const joinPromise = new Promise<Channel>((resolve, reject) => {
      channel
        .join()
        .receive('ok', () => {
          this.#joiningChannels.delete(topic)
          this.#channels.set(topic, channel)

          return resolve(channel)
        })
        .receive('error', (err) => {
          this.#joiningChannels.delete(topic)
          reject(err)
        })
        .receive('timeout', () => {
          this.#joiningChannels.delete(topic)
          reject(`${topic} timeout`)
        })
    })

    this.#joiningChannels.set(topic, joinPromise)

    return joinPromise
  }

  #leave(chan: Channel | string) {
    const topic = typeof chan === 'string' ? chan : chan.topic
    const savedChan = this.#channels.get(topic)
    if (savedChan) {
      this.#channels.delete(topic)
    }

    savedChan?.leave()
  }
}
