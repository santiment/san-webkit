import { BROWSER } from 'esm-env';
import { track as amplitudeTrack } from '@amplitude/analytics-browser';
import { Query } from '../../api/executor.js';
import { trackSanEvent } from './api.js';
export var Tracker;
(function (Tracker) {
    Tracker["GA"] = "ga";
    Tracker["SAN"] = "san";
    Tracker["TWQ"] = "twq";
    Tracker["AMPLITUDE"] = "AMPLITUDE";
})(Tracker || (Tracker = {}));
function canTrackBrowser() {
    const dnt = 
    // @ts-ignore
    navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
    return dnt !== '1' && dnt !== 'yes';
}
const DEFAULT_TRACKERS = [Tracker.GA, Tracker.SAN, Tracker.AMPLITUDE];
export const track = {
    event(action, { category, label, ...rest } = {}, trackers = DEFAULT_TRACKERS) {
        if (!BROWSER)
            return;
        const isTrackingDisabled = !canTrackBrowser();
        if (process.env.IS_DEV_MODE || process.env.IS_STAGE_BACKEND) {
            console.log('%c[DEV ONLY] Analytics', 'background:#FFCB47;color:black;padding:3px;border-radius:4px', normalizeData({ event: action, category, label, ...rest }));
            return;
        }
        if (isTrackingDisabled)
            return;
        const date = Date.now();
        if (trackers.includes(Tracker.AMPLITUDE)) {
            amplitudeTrack(action, normalizeData({ event_category: category, event_label: label, ...rest }));
        }
        if (trackers.includes(Tracker.GA) && window.gtag) {
            window.gtag('event', action, normalizeData({ event_category: category, event_label: label, ...rest }));
        }
        if (trackers.includes(Tracker.SAN)) {
            trackSanEvent(Query)(action, new Date(date), normalizeData({ event_category: category, event_label: label, ...rest }));
        }
    },
};
function normalizeData(data) {
    const normalized = {};
    for (const key in data) {
        if (data[key] !== undefined)
            normalized[key] = data[key];
    }
    return normalized;
}
