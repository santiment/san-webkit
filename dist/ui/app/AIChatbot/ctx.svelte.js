import { Query } from '../../../api/executor.js';
import { createCtx } from '../../../utils/index.js';
import { mutateSendChatMessage } from './api.js';
export const useChatContext = createCtx('webkit_useChatCtx', (initialContext = undefined) => {
    let message = $state('');
    let temporaryMessage = $state('');
    let opened = $state(false);
    let loading = $state(false);
    const context = $state.raw(initialContext);
    let session = $state.raw(undefined);
    return {
        message: {
            get $$() {
                return message;
            },
            set $$(value) {
                message = value;
            },
        },
        opened: {
            get $$() {
                return opened;
            },
            set $$(value) {
                opened = value;
            },
        },
        temporaryMessage: {
            get $() {
                return temporaryMessage;
            },
        },
        session: {
            get $() {
                return session;
            },
        },
        loading: {
            get $() {
                return loading;
            },
        },
        async sendMessage(value) {
            const content = value.trim();
            if (!opened)
                opened = true;
            if (!content || loading)
                return;
            temporaryMessage = content;
            loading = true;
            message = '';
            await mutateSendChatMessage(Query)({
                chatId: session?.id,
                content,
                context,
            })
                .then((data) => (session = data))
                .then(() => {
                loading = false;
                temporaryMessage = '';
            });
        },
    };
});
