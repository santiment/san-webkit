import type { Socket as PhoenixSocket, Channel } from 'phoenix'

export type SocketParams = {
  jti?: string
}

function getSocketUrl() {
  const backendUrl = process.env.BACKEND_URL || 'https://api-stage.santiment.net'
  const socketUrl = new URL('/socket', backendUrl)

  socketUrl.protocol = socketUrl.protocol === 'https:' ? 'wss:' : 'ws:'

  return socketUrl.toString()
}

export type TChannelTopic = 'users:common' | `notifications:${string}`

export class Socket {
  #socket: PhoenixSocket
  #channels = new Map<TChannelTopic, Channel>()
  #joiningChannels = new Map<TChannelTopic, Promise<Channel>>()
  #subscriptionRefs = new Map<TChannelTopic, Set<number> | undefined>()

  constructor(phoenixLib: typeof import('phoenix'), params: SocketParams = {}) {
    this.#socket = new phoenixLib.Socket(getSocketUrl(), { params })
    this.#socket.connect()
  }

  async query(topic: TChannelTopic, event: string, payload: object) {
    const chan = await this.#join(topic)

    return {
      result: await this.#send(chan, event, payload),
      leave: () => this.#leave(chan),
    }
  }

  subscribe(topic: TChannelTopic, event: string, clb: (response?: unknown) => void) {
    let isCancelled = false
    let channel: Channel | undefined
    let listenerRef: number | undefined

    this.#join(topic)
      .then((chan) => {
        if (isCancelled) return

        channel = chan
        listenerRef = chan.on(event, clb)

        const topicRefs = this.#subscriptionRefs.get(topic) ?? new Set<number>()
        topicRefs.add(listenerRef)
        this.#subscriptionRefs.set(topic, topicRefs)
      })
      .catch((err) => {
        if (isCancelled) return

        console.error(`Failed to subscribe to topic ${topic}`, err)
      })

    return () => {
      isCancelled = true

      const topicRefs = this.#subscriptionRefs.get(topic)

      if (channel && listenerRef !== undefined) {
        channel.off(event, listenerRef)
        topicRefs?.delete(listenerRef)
      }

      if (!topicRefs?.size) {
        this.#leave(topic)
      }
    }
  }

  disconnect() {
    this.#socket.disconnect()
    this.#channels.clear()
    this.#joiningChannels.clear()
    this.#subscriptionRefs.clear()
  }

  leave(topic: TChannelTopic) {
    this.#leave(topic)
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

  async #join(topic: TChannelTopic) {
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

  #leave(chan: Channel | TChannelTopic) {
    const topic = typeof chan === 'string' ? chan : (chan.topic as TChannelTopic)
    const savedChan = this.#channels.get(topic)
    if (savedChan) {
      this.#channels.delete(topic)
    }

    savedChan?.leave()
  }
}
