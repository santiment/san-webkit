import { Socket } from 'phoenix'

export const socket = new Socket('wss://api-stage.santiment.net/socket')
socket.connect()
socket.onError(() => console.log('there was an error with the connection!'))
socket.onClose(() => console.log('the connection dropped'))

const channel = socket.channel(`users:common`, {})
channel.join()

const TIMEOUT = 2000

// TODO: Add caching [@vanguard]
export function searchUserByUsername(username: string): Promise<SAN.Author[]> {
  return new Promise((resolve) =>
    channel
      .push('users_by_username_pattern', { username_pattern: username, size: 5 }, TIMEOUT)
      .receive('ok', ({ users }) => resolve(users)),
  )
}
