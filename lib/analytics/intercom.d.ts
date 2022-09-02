export declare function bootIntercom(app_id: string, user_id?: number, name?: string, email?: string): void;
export declare function updateIntercom(user_id?: number, name?: string | null, email?: string | null): void;
export declare function showIntercom(): void;
declare global {
    interface Window {
        Intercom: any;
        intercomSettings: any;
    }
}
