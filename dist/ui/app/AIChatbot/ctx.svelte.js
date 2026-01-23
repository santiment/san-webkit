import { dialogs$ } from '../../core/Dialog/index.js';
import { Query } from '../../../api/executor.js';
import { createCtx } from '../../../utils/index.js';
import AcademyQA from './variants/academyQA/index.js';
import DyorDashboard from './variants/dyorDashboard/index.js';
import { mutateSendAiChatbotMessage, mutateSubmitChatMessageFeedback } from './api.js';
const storageKey = 'webkit_ai_chatbot_session';
export const useAIChatbotCtx = createCtx('webkit_useChatAICtx', (initialValue = undefined) => {
    const getInitialState = () => {
        const defaults = {
            message: '',
            temporaryMessage: '',
            opened: false,
            session: undefined,
            type: initialValue?.type,
            context: initialValue?.context,
        };
        if (typeof window === 'undefined') {
            return defaults;
        }
        const storedJson = window.sessionStorage.getItem(storageKey);
        const storedState = storedJson ? JSON.parse(storedJson) : {};
        return {
            ...defaults,
            session: storedState.session || undefined,
            type: initialValue?.type || storedState.type,
            context: initialValue?.context || storedState.context,
        };
    };
    let state = $state(getInitialState());
    let loading = $state(false);
    $effect(() => {
        const stateToStore = {
            session: state.session,
            type: state.type,
            context: state.context,
        };
        window.sessionStorage.setItem(storageKey, JSON.stringify(stateToStore));
    });
    const variantMap = {
        ['ACADEMY_QA']: dialogs$.new(AcademyQA),
        ['DYOR_DASHBOARD']: dialogs$.new(DyorDashboard),
    };
    const showChatUI = () => variantMap[state.type || 'DYOR_DASHBOARD']();
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
                    type: state.type,
                    content,
                    context: state.context,
                })
                    .then((data) => (state.session = data))
                    .then(() => {
                    loading = false;
                    state.temporaryMessage = '';
                });
            },
            async sendFeedback(messageId, feedbackType) {
                const session = state.session;
                if (!session?.chatMessages)
                    return;
                const idx = session.chatMessages.findIndex((m) => m.id === messageId);
                if (idx === -1)
                    return;
                await mutateSubmitChatMessageFeedback(Query)({
                    messageId,
                    feedbackType,
                }).then((data) => {
                    session.chatMessages[idx].feedbackType = data.feedbackType ?? null;
                });
            },
            resetSession() {
                state.session = undefined;
            },
            openWithPrompt(prompt) {
                if (!state.type)
                    return;
                showChatUI();
                if (prompt) {
                    this.sendMessage(prompt);
                }
            },
        },
    };
});
