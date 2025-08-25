import type { TAiChatbotSession, TAiChatType } from './types.js'

import { ApiMutation } from '$lib/api/index.js'

export const mutateSendAiChatbotMessage = ApiMutation(
  ({
    chatId,
    content,
    context,
    type = 'DYOR_DASHBOARD',
  }: {
    chatId?: string
    content: string
    context?: Record<string, any>
    type?: TAiChatType
  }) => ({
    schema: `
    mutation($chatId: ID, $content: String!, $context: ChatContextInput, $type: ChatType) {
      sendChatMessage(chatId: $chatId, content: $content, context: $context, type: $type) {
        id
        title
        type
        insertedAt
        chatMessages {
          id
          content
          context
          role
          insertedAt
      }
    }
  }
`,
    variables: { chatId, content, context, type },
  }),
  (gql: { sendChatMessage: TAiChatbotSession }) => gql.sendChatMessage,
)
