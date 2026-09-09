type TProps = {
    loading?: boolean;
    placeholder?: string;
    icon?: string | null;
    class?: string;
    onSubmit: (query: string) => void;
};
declare const ChatInput: import("svelte").Component<TProps, {}, "loading">;
type ChatInput = ReturnType<typeof ChatInput>;
export default ChatInput;
