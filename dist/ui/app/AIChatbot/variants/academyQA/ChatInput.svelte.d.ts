type TProps = {
    value: string;
    loading?: boolean;
    placeholder?: string;
    icon?: string | null;
    class?: string;
    onSubmit: VoidFunction;
};
declare const ChatInput: import("svelte").Component<TProps, {}, "value">;
type ChatInput = ReturnType<typeof ChatInput>;
export default ChatInput;
