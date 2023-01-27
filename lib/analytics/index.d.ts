export declare enum Tracker {
    GA = "ga",
    SAN = "san",
    TWQ = "twq",
    AMPLITUDE = "AMPLITUDE"
}
export declare const isTrackingEnabled: boolean;
export declare type EventData = {
    [key: string]: undefined | string | number | string[] | number[] | boolean | boolean[];
};
declare type SendEvent = (eventName: string, data?: EventData, trackers?: Tracker[]) => number;
export declare const track: {
    event: SendEvent;
    pageview(app_name: string): void;
    timedPageview(prevTimer: number, timeout?: number): number;
};
export {};
