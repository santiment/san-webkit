type TProps = {
    loading: boolean;
    onSubscriptionCancel: (reasons: Set<string>, feedback: string) => void;
};
declare const FeedbackScreen: import("svelte").Component<TProps, {}, "">;
type FeedbackScreen = ReturnType<typeof FeedbackScreen>;
export default FeedbackScreen;
