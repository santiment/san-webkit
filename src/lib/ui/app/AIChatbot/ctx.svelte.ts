import type { TAiChatbotContext, TAiChatbotSession, TAiChatType } from './types.js'

import { dialogs$ } from '$ui/core/Dialog/index.js'
import { Query } from '$lib/api/executor.js'
import { createCtx } from '$lib/utils/index.js'

import AcademyQA from './variants/academyQA/index.js'
import DyorDashboard from './variants/dyorDashboard/index.js'
import { mutateSendAiChatbotMessage } from './api.js'

type TAIChatState = {
  type?: TAiChatType
  message: string
  temporaryMessage: string
  opened: boolean
  session: TAiChatbotSession | undefined
  context: TAiChatbotContext | undefined
}

type AiChatbotInitialValue = {
  type: TAiChatType
  context?: TAiChatbotContext
}

export const useAIChatbotCtx = createCtx(
  'webkit_useChatAICtx',
  (initialValue: AiChatbotInitialValue | undefined = undefined) => {
    let state = $state<TAIChatState>({
      message: '',
      temporaryMessage: '',
      opened: false,
      session: undefined,
      type: initialValue?.type,
      context: initialValue?.context,
    })

    let loading = $state(false)

    const variantMap: Record<TAiChatType, any> = {
      ['ACADEMY_QA']: dialogs$.new(AcademyQA),
      ['DYOR_DASHBOARD']: dialogs$.new(DyorDashboard),
    }

    // TODO: Improve that part in the future
    const showChatUI = () => variantMap[state.type || 'DYOR_DASHBOARD']()

    return {
      aiChatbot: {
        get $$() {
          return state
        },

        set $$(value) {
          state = value
        },

        get loading$() {
          return loading
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
            type: state.type,
            content,
            context: state.context,
          })
            .then((data) => (state.session = data))
            .then(() => {
              loading = false
              state.temporaryMessage = ''
            })
        },

        openWithPrompt(prompt?: string) {
          if (!state.type) return

          showChatUI()

          if (prompt) {
            this.sendMessage(prompt)
          }
        },
      },
    }
  },
)
