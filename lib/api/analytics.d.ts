export declare const CURRENT_USER_QUERY = "\n  {\n    currentUser {\n      id\n    }\n  }\n";
export declare type CurrentUser = {
    id: number;
} | null;
export declare const queryCurrentUser: () => Promise<CurrentUser>;
declare type EventData = {
    [key: string]: string | number;
};
export declare const trackSanEvent: (event_name: string, created_at: Date, metadata: EventData) => Promise<SAN.API.QueryBase | undefined>;
export {};
