import type { TAiChatbotContext, TAiChatbotSession, TAiChatType, TChatMessageFeedback } from './types.js';
type TAIChatState = {
    type?: TAiChatType;
    message: string;
    temporaryMessage: string;
    opened: boolean;
    session: TAiChatbotSession | undefined;
    context: TAiChatbotContext | undefined;
};
type AiChatbotInitialValue = {
    type: TAiChatType;
    context?: TAiChatbotContext;
};
export declare const useAIChatbotCtx: ((initialValue?: AiChatbotInitialValue | undefined) => {
    aiChatbot: {
        $$: TAIChatState;
        readonly loading$: boolean;
        sendMessage(value: string): Promise<void> | undefined;
        sendFeedback(messageId: string, feedbackType: TChatMessageFeedback): Promise<void>;
        resetSession(): void;
        openWithPrompt(prompt?: string): void;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: (initialValue?: AiChatbotInitialValue | undefined) => {
        aiChatbot: {
            $$: TAIChatState;
            readonly loading$: boolean;
            sendMessage(value: string): Promise<void> | undefined;
            sendFeedback(messageId: string, feedbackType: TChatMessageFeedback): Promise<void>;
            resetSession(): void;
            openWithPrompt(prompt?: string): void;
        };
    };
    __CTX: "webkit_useChatAICtx";
};
export {};
