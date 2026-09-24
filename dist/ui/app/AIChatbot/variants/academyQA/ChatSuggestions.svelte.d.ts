type TProps = {
    suggestions: string[];
    title?: string;
    class?: string;
    onItemClick: (suggestion: string) => void;
};
declare const ChatSuggestions: import("svelte").Component<TProps, {}, "">;
type ChatSuggestions = ReturnType<typeof ChatSuggestions>;
export default ChatSuggestions;
