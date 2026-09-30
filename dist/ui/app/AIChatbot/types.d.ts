export type TAiChatbotContext = {
    dashboardId?: string;
    asset?: string;
    metrics?: string[];
    [key: string]: any;
};
export type TSource = {
    chunks_count: string;
    number: number;
    similarity: number;
    title: string;
    url: string;
};
export type TAiChatbotMessage = {
    id: string;
    content: string;
    role: 'USER' | 'ASSISTANT';
    context?: TAiChatbotContext;
    insertedAt: string;
    feedbackType: TChatMessageFeedback;
    sources?: TSource[];
    suggestions?: string[];
};
export type TAiChatbotSession = {
    chatMessages: [TAiChatbotMessage];
    id: string;
    insertedAt: string;
    latestMessage: TAiChatbotMessage;
    messagesCount: number;
    title: string;
    type: 'DYOR_DASHBOARD';
    updatedAt: string;
    user: any;
};
export type TAiChatType = 'ACADEMY_QA' | 'DYOR_DASHBOARD';
export type TChatMessageFeedback = 'THUMBS_DOWN' | 'THUMBS_UP' | null;
