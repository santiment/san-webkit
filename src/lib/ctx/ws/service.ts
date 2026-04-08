import { noop } from 'rxjs'
import { z } from 'zod'

import { Socket } from './ws.js'

const userSchema = z.object({
  users: z.array(
    z
      .object({
        id: z.number(),
        username: z.string(),
        avatar_url: z.string().nullable(),
      })
      .transform(({ avatar_url, ...rest }) => ({ ...rest, avatarUrl: avatar_url })),
  ),
})

const notificationSchema = z.object({
  notification_id: z.number(),
})

type TCreateSocketApiParams = {
  waitForSocket: () => Promise<Socket>
  waitForAuthenticatedSocket: () => Promise<Socket>
}

export const createSocketApi = ({
  waitForSocket,
  waitForAuthenticatedSocket,
}: TCreateSocketApiParams) => ({
  async searchUserByUsername(username: string) {
    const socket = await waitForSocket()
    const { result, leave } = await socket.query('users:common', 'users_by_username_pattern', {
      username_pattern: username,
      size: 5,
    })

    const parsed = userSchema.safeParse(result)

    if (parsed.success) {
      return { users: parsed.data.users, leave }
    }

    console.error(`Failed to parse users data`, result, parsed.error)
    return { users: [], leave }
  },

  subscribeToNotifications(userId: string, onNotification: (notificationId: number) => void) {
    let isCancelled = false
    let unsubscribe = noop

    waitForAuthenticatedSocket()
      .then((socket) => {
        if (isCancelled) return

        unsubscribe = socket.subscribe(`notifications:${userId}`, 'notification', (response) => {
          const parsed = notificationSchema.safeParse(response)

          if (!parsed.success) {
            console.error('notifcation parse error', parsed.error)
            return
          }

          onNotification(parsed.data.notification_id)
        })
      })
      .catch((err) => {
        if (isCancelled) return

        console.error(`Failed to subscribe to notifications for user ${userId}`, err)
      })

    return () => {
      isCancelled = true
      unsubscribe()
    }
  },
})
