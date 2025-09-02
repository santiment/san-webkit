import type { TAiChatbotContext, TAiChatbotSession } from './types.js';
type TAIChatState = {
    message: string;
    temporaryMessage: string;
    opened: boolean;
    session: TAiChatbotSession | undefined;
    context: TAiChatbotContext | undefined;
};
export declare const useAIChatbotCtx: ((initialContext?: TAiChatbotContext | undefined) => {
    aiChatbot: {
        $$: TAIChatState;
        readonly loading$: boolean;
        sendMessage(value: string): Promise<void>;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        aiChatbot: {
            $$: TAIChatState;
            readonly loading$: boolean;
            sendMessage(value: string): Promise<void>;
        };
    };
    set: (initialContext?: TAiChatbotContext | undefined) => {
        aiChatbot: {
            $$: TAIChatState;
            readonly loading$: boolean;
            sendMessage(value: string): Promise<void>;
        };
    };
};
export {};
