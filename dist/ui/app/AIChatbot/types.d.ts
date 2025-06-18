export type ChatContext = {
    dashboardId?: string;
    asset?: string;
    metrics?: string[];
    [key: string]: any;
};
type ChatMessage = {
    id: string;
    content: string;
    role: 'USER' | 'ASSISTANT';
    context?: ChatContext;
    insertedAt: string;
};
export type ChatSession = {
    chatMessages: [ChatMessage];
    id: string;
    insertedAt: string;
    latestMessage: ChatMessage;
    messagesCount: number;
    title: string;
    type: 'DYOR_DASHBOARD';
    updatedAt: string;
    user: any;
};
export {};
