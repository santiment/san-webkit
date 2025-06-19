export type AiChatbotContext = {
  dashboardId?: string
  asset?: string
  metrics?: string[]
  [key: string]: any
}

type AiChatbotMessage = {
  id: string
  content: string
  role: 'USER' | 'ASSISTANT'
  context?: AiChatbotContext
  insertedAt: string
}

export type AiChatbotSession = {
  chatMessages: [AiChatbotMessage]
  id: string
  insertedAt: string
  latestMessage: AiChatbotMessage
  messagesCount: number
  title: string
  type: 'DYOR_DASHBOARD'
  updatedAt: string
  user: any
}
