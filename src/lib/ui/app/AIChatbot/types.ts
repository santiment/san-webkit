export type TAiChatbotContext = {
  dashboardId?: string
  asset?: string
  metrics?: string[]
  [key: string]: any
}

type TAiChatbotMessage = {
  id: string
  content: string
  role: 'USER' | 'ASSISTANT'
  context?: TAiChatbotContext
  insertedAt: string
}

export type TAiChatbotSession = {
  chatMessages: [TAiChatbotMessage]
  id: string
  insertedAt: string
  latestMessage: TAiChatbotMessage
  messagesCount: number
  title: string
  type: 'DYOR_DASHBOARD'
  updatedAt: string
  user: any
}

export type TAiChatType = 'ACADEMY_QA' | 'DYOR_DASHBOARD'
