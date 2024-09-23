import { type TEventData } from './track.js';
import type { TGenericAnalyticEvents } from './types.js';
export declare const trackEvent: (event: TGenericAnalyticEvents, props: TEventData | Partial<{
    type: string;
    source: string;
    action: string;
}>) => false | void;
