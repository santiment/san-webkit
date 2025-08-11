import { Query } from '../../../api/executor.js';
import { createCtx } from '../../../utils/index.js';
import { mutateSendAiChatbotMessage } from './api.js';
export const useAIChatbotCtx = createCtx('webkit_useChatAICtx', (initialContext = undefined) => {
    let state = $state({
        message: '',
        temporaryMessage: '',
        opened: false,
        session: undefined,
        context: initialContext,
    });
    let loading = $state(false);
    return {
        aiChatbot: {
            get $$() {
                return state;
            },
            set $$(value) {
                state = value;
            },
            get loading$() {
                return loading;
            },
            async sendMessage(value) {
                const content = value.trim();
                if (!state.opened)
                    state.opened = true;
                if (!content || loading)
                    return;
                state.temporaryMessage = content;
                loading = true;
                state.message = '';
                await mutateSendAiChatbotMessage(Query)({
                    chatId: state.session?.id,
                    content,
                    context: state.context,
                })
                    .then((data) => (state.session = data))
                    .then(() => {
                    loading = false;
                    state.temporaryMessage = '';
                });
            },
        },
    };
});
