import type { ChatContext, ChatSession } from './types.js'

import { Query } from '$lib/api/executor.js'
import { createCtx } from '$lib/utils/index.js'

import { mutateSendChatMessage } from './api.js'

export const useChatContext = createCtx(
  'webkit_useChatCtx',
  (initialContext: ChatContext | undefined = undefined) => {
    let loading = $state(false)
    const context = $state.raw<ChatContext | undefined>(initialContext)
    let session = $state.raw<ChatSession | undefined>(undefined)

    return {
      session: {
        get $() {
          return session
        },
      },

      loading: {
        get $() {
          return loading
        },
      },

      async sendMessage(content: string) {
        loading = true

        await mutateSendChatMessage(Query)({
          chatId: session?.id,
          content,
          context,
        })
          .then((data) => (session = data))
          .then(() => (loading = false))
      },
    }
  },
)
