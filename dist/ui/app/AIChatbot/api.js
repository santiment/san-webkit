import { ApiMutation, ApiQuery } from '../../../api/index.js';
export const MESSAGE_FRAGMENT = `
  id
  content
  context
  sources
  suggestions
  feedbackType
  role
  insertedAt
`;
export const mutateSendAiChatbotMessage = ApiMutation(({ chatId, content, context, type = 'DYOR_DASHBOARD', }) => ({
    schema: `
    mutation($chatId: ID, $content: String!, $context: ChatContextInput, $type: ChatType) {
      sendChatMessage(chatId: $chatId, content: $content, context: $context, type: $type) {
        id
        title
        type
        insertedAt
        chatMessages {
          ${MESSAGE_FRAGMENT}
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
export const queryAcademyAutocompleteQuestions = ApiQuery((query) => `{
    academyAutocompleteQuestions(query: "${query}") {
      title
      question
    }
  }`, (gql) => gql.academyAutocompleteQuestions);
export const queryChatMessages = ApiQuery((chatId, limit = 50, offset = 0) => `
    chatMessages(chatId: ${chatId}, limit: ${limit}, offset: ${offset}) {
      ${MESSAGE_FRAGMENT}
    }
`, (gql) => gql.chatMessages);
