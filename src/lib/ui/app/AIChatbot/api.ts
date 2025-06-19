import type { AiChatbotSession } from './types.js'

import { ApiMutation } from '$lib/api/index.js'

export const mutateSendAiChatbotMessage = ApiMutation(
  ({
    chatId,
    content,
    context,
  }: {
    chatId?: string
    content: string
    context?: Record<string, any>
  }) => ({
    schema: `
    mutation($chatId: ID, $content: String!, $context: ChatContextInput) {
      sendChatMessage(chatId: $chatId, content: $content, context: $context) {
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
    variables: { chatId, content, context },
  }),
  (gql: { sendChatMessage: AiChatbotSession }) => gql.sendChatMessage,
)
