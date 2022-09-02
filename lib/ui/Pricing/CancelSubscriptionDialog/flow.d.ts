export declare const REASONS: string[];
export declare enum Screen {
    Suggestions = 0,
    Feedback = 1
}
export declare enum Event {
    SelectReason = "cancel_subscribtion_select_reason",
    GiveFeedback = "cancel_subscribtion_give_feedback"
}
export declare function startCancellationFlow(subscription: SAN.Subscription, feedback: string, closeDialog: any): Promise<void>;
