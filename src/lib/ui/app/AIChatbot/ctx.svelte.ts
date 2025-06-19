import type { AiChatbotContext, AiChatbotSession } from './types.js'

import { Query } from '$lib/api/executor.js'
import { createCtx } from '$lib/utils/index.js'

import { mutateSendAiChatbotMessage } from './api.js'

type TAIChatState = {
  message: string
  temporaryMessage: string
  opened: boolean
  session: AiChatbotSession | undefined
  context: AiChatbotContext | undefined
}

export const useAIChatbotCtx = createCtx(
  'webkit_useChatAICtx',
  (initialContext: AiChatbotContext | undefined = undefined) => {
    let state = $state<TAIChatState>({
      message: '',
      temporaryMessage: '',
      opened: false,
      session: undefined,
      context: initialContext,
    })

    let loading = $state(false)

    return {
      state: {
        get $$() {
          return state
        },

        set $$(value) {
          state = value
        },
      },

      loading: {
        get $() {
          return loading
        },
      },

      async sendMessage(value: string) {
        const content = value.trim()

        if (!state.opened) state.opened = true
        if (!content || loading) return

        state.temporaryMessage = content
        loading = true
        state.message = ''

        await mutateSendAiChatbotMessage(Query)({
          chatId: state.session?.id,
          content,
          context: state.context,
        })
          .then((data) => (state.session = data))
          .then(() => {
            loading = false
            state.temporaryMessage = ''
          })
      },
    }
  },
)
