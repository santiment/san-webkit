export declare enum Tracker {
    GA = "ga",
    SAN = "san",
    TWQ = "twq"
}
export declare const isTrackingEnabled: any;
declare type EventData = {
    [key: string]: string | number | string[] | number[];
};
declare type SendEvent = (eventName: string, data?: EventData, trackers?: Tracker[]) => number;
export declare const track: {
    event: SendEvent;
    pageview(app_name: string): void;
    timedPageview(prevTimer: number, timeout?: number): number;
};
export {};
