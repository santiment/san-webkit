export declare const NEWSLETTER_EMAIL_LOGIN_MUTATION = "\n  mutation ($email: String!) {\n    emailLogin(email: $email, subscribeToWeeklyNewsletter: true) {\n      success\n    }\n  }\n";
declare type EmailLoginMutation = SAN.API.Query<'emailLogin', {
    success: boolean;
}>;
export declare const loginWithNewsletter: (email: string) => Promise<EmailLoginMutation>;
export declare const mutateChangeUsername: (username: string) => Promise<SAN.API.QueryBase>;
export {};
