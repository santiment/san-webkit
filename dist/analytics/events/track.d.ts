export declare enum Tracker {
    GA = "ga",
    SAN = "san",
    TWQ = "twq",
    POSTHOG = "POSTHOG"
}
export type TEventData = {
    [key: string]: undefined | string | number | string[] | number[] | boolean | boolean[];
};
type TTrackEventFn = (eventName: string, data?: TEventData, trackers?: Tracker[]) => void;
export declare const track: {
    event: TTrackEventFn;
};
export {};
