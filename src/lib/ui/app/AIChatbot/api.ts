import { ApiMutation } from '$lib/api/index.js'

export const mutateSendChatMessage = ApiMutation(
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
  (gql: { sendChatMessage: any }) => gql.sendChatMessage,
)
