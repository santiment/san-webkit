export function Socket(url) {
  const socket = new WebSocket(url + '/websocket?vsn=2.0.0')
  const Receiver = new Map()
  let msgId = 0
  let state = WebSocket.CONNECTING
  let buffer = []
  const send = (msg) => socket.send(JSON.stringify(msg))
  socket.onopen = () => {
    state = WebSocket.OPEN
    buffer.forEach(send)
    buffer.length = 0
  }
  socket.onmessage = (e) => {
    const [, msgId, , , data] = JSON.parse(e.data)
    const { response, status } = data
    const controller = Receiver.get(msgId)
    if (!controller) return
    if (status === 'ok') controller.resolve(response)
    else controller.reject(response)
    Receiver.delete(msgId)
  }
  return {
    message(channel, event, data = {}) {
      const promise = new Promise((resolve, reject) => Receiver.set(msgId, { resolve, reject }))
      const msg = [0, msgId++, channel, event, data]
      return { promise, msg }
    },
    send(channel, event, data = {}) {
      const { msg, promise } = this.message(channel, event, data)
      if (state === WebSocket.CONNECTING) {
        buffer.push(msg)
      } else {
        send(msg)
      }
      return promise
    },
  }
}
export const socket = Socket('wss://api.santiment.net/socket')
socket.send('users:common', 'phx_join')
// TODO: Add caching [@vanguard]
export function searchUserByUsername(username) {
  // return Promise.reject()
  return socket
    .send('users:common', 'users_by_username_pattern', { username_pattern: username, size: 5 })
    .then(({ users }) => users)
}
//# sourceMappingURL=ws.js.map
