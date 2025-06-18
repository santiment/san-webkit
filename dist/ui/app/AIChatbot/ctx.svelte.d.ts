import type { ChatContext, ChatSession } from './types.js';
export declare const useChatContext: ((initialContext?: ChatContext | undefined) => {
    message: {
        $$: string;
    };
    opened: {
        $$: boolean;
    };
    temporaryMessage: {
        readonly $: string;
    };
    session: {
        readonly $: ChatSession | undefined;
    };
    loading: {
        readonly $: boolean;
    };
    sendMessage(value: string): Promise<void>;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        message: {
            $$: string;
        };
        opened: {
            $$: boolean;
        };
        temporaryMessage: {
            readonly $: string;
        };
        session: {
            readonly $: ChatSession | undefined;
        };
        loading: {
            readonly $: boolean;
        };
        sendMessage(value: string): Promise<void>;
    };
    set: (initialContext?: ChatContext | undefined) => {
        message: {
            $$: string;
        };
        opened: {
            $$: boolean;
        };
        temporaryMessage: {
            readonly $: string;
        };
        session: {
            readonly $: ChatSession | undefined;
        };
        loading: {
            readonly $: boolean;
        };
        sendMessage(value: string): Promise<void>;
    };
};
