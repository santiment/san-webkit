import type { TAiChatbotMessage } from '../../types.js';
type TProps = Pick<TAiChatbotMessage, 'role' | 'content' | 'insertedAt'> & {
    suggestions?: any;
    feedback?: any;
    sources?: any;
};
declare const ChatMessage: import("svelte").Component<TProps, {}, "">;
type ChatMessage = ReturnType<typeof ChatMessage>;
export default ChatMessage;
