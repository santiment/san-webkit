import type { TGenericAnalyticEvents } from './types.js';
import { Tracker, type TEventData } from './track.js';
export declare const trackEvent: (event: TGenericAnalyticEvents, props: TEventData | Partial<{
    type: string;
    source: string;
    action: string;
}>, trackers?: Tracker[]) => false | void;
