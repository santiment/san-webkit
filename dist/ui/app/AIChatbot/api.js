import { ApiMutation } from '../../../api/index.js';
export const mutateSendAiChatbotMessage = ApiMutation(({ chatId, content, context, type = 'DYOR_DASHBOARD', }) => ({
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
          sources
          suggestions
          feedbackType
          role
          insertedAt
      }
    }
  }
`,
    variables: { chatId, content, context, type },
}), (gql) => gql.sendChatMessage);
export const mutateSubmitChatMessageFeedback = ApiMutation(({ messageId, feedbackType }) => ({
    schema: `
    mutation($messageId: ID!, $feedbackType: ChatMessageFeedbackType!) {
      submitChatMessageFeedback(messageId: $messageId, feedbackType: $feedbackType) {
        id
        feedbackType
      }
  }
`,
    variables: { messageId, feedbackType },
}), (gql) => gql.submitChatMessageFeedback);
