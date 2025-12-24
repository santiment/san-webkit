import type { TChatMessageFeedback } from '../../types.js';
type TProps = {
    feedbackType?: TChatMessageFeedback | null;
    messageId?: string;
    class?: string;
    onFeedbackSelect: (feedbackType: TChatMessageFeedback) => void;
};
declare const ChatFeedback: import("svelte").Component<TProps, {}, "">;
type ChatFeedback = ReturnType<typeof ChatFeedback>;
export default ChatFeedback;
