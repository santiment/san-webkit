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
        sendMessage(value: string): Promise<void>;
        sendFeedback(messageId: string, feedbackType: TChatMessageFeedback): Promise<void>;
        resetSession(): void;
        openWithPrompt(prompt?: string): void;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        aiChatbot: {
            $$: TAIChatState;
            readonly loading$: boolean;
            sendMessage(value: string): Promise<void>;
            sendFeedback(messageId: string, feedbackType: TChatMessageFeedback): Promise<void>;
            resetSession(): void;
            openWithPrompt(prompt?: string): void;
        };
    };
    set: (initialValue?: AiChatbotInitialValue | undefined) => {
        aiChatbot: {
            $$: TAIChatState;
            readonly loading$: boolean;
            sendMessage(value: string): Promise<void>;
            sendFeedback(messageId: string, feedbackType: TChatMessageFeedback): Promise<void>;
            resetSession(): void;
            openWithPrompt(prompt?: string): void;
        };
    };
};
export {};
