import type {
  TAiChatbotMessage,
  TAiChatbotSession,
  TAiChatType,
  TChatMessageFeedback,
} from './types.js'

import { ApiMutation, ApiQuery } from '$lib/api/index.js'

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
  }),
  (gql: { sendChatMessage: TAiChatbotSession }) => gql.sendChatMessage,
)

export const mutateSubmitChatMessageFeedback = ApiMutation(
  ({ messageId, feedbackType }: { messageId: string; feedbackType: TChatMessageFeedback }) => ({
    schema: `
    mutation($messageId: ID!, $feedbackType: ChatMessageFeedbackType!) {
      submitChatMessageFeedback(messageId: $messageId, feedbackType: $feedbackType) {
        id
        feedbackType
      }
  }
`,
    variables: { messageId, feedbackType },
  }),
  (gql: { submitChatMessageFeedback: TAiChatbotMessage }) => gql.submitChatMessageFeedback,
)

export const queryAcademyAutocompleteQuestions = ApiQuery(
  (query: string) => `{
    academyAutocompleteQuestions(query: "${query}") {
      title
      question
    }
  }`,
  (gql: { academyAutocompleteQuestions: { title: string; question: string }[] }) =>
    gql.academyAutocompleteQuestions,
)
