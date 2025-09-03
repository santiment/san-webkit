import { ApiMutation } from '../../../api/index.js';
export const mutateSendAiChatbotMessage = ApiMutation(({ chatId, content, context, }) => ({
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
}), (gql) => gql.sendChatMessage);
