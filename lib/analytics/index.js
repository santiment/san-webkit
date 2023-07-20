var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { trackSanEvent } from './../api/analytics.js';
import { normalizeData } from './utils.js';
import { TwitterTrackActions } from './twitter.js';
export var Tracker;
(function (Tracker) {
    Tracker["GA"] = "ga";
    Tracker["SAN"] = "san";
    Tracker["TWQ"] = "twq";
    Tracker["AMPLITUDE"] = "AMPLITUDE";
})(Tracker || (Tracker = {}));
const noop = () => { }; // eslint-disable-line
function canTrackBrowser() {
    const dnt = 
    // @ts-ignore
    navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
    return dnt !== '1' && dnt !== 'yes';
}
export const isTrackingEnabled = process.browser &&
    (process.env.IS_DEV_MODE || (process.env.IS_PROD_BACKEND ? canTrackBrowser() : true));
const DEFAULT_TRACKERS = [Tracker.GA, Tracker.SAN, Tracker.AMPLITUDE];
const event = isTrackingEnabled
    ? (action, _a = {}, trackers) => {
        var { category, label } = _a, rest = __rest(_a, ["category", "label"]);
        if (trackers === void 0) { trackers = DEFAULT_TRACKERS; }
        if (process.env.IS_DEV_MODE || process.env.IS_PROD_BACKEND === false) {
            const dnt = canTrackBrowser() ? '' : ' (DNT)';
            console.log('%c[DEV ONLY] Analytics' + dnt, 'background:#FFCB47;color:black;padding:3px;border-radius:4px', normalizeData(Object.assign({ event: action, category,
                label }, rest)));
            return;
        }
        const date = Date.now();
        if (trackers.includes(Tracker.TWQ) && window.twq) {
            window.twq('track', action, normalizeData(rest));
        }
        if (trackers.includes(Tracker.GA) && window.gtag) {
            window.gtag('event', action, normalizeData(Object.assign({ event_category: category, event_label: label }, rest)));
        }
        if (trackers.includes(Tracker.SAN)) {
            trackSanEvent(action, new Date(date), normalizeData(Object.assign({ event_category: category, event_label: label }, rest)));
        }
        if (trackers.includes(Tracker.AMPLITUDE) && window.amplitude && window.amplitude.track) {
            window.amplitude.track(action, normalizeData(Object.assign({ event_category: category, event_label: label }, rest)));
            // NOTE: Was causing issues, since was called before amplitude's internal config init
            // window.amplitude.flush()
        }
        return date;
    }
    : noop;
export const track = {
    event,
    pageview(app_name) {
        event('page_view', {
            app_name,
            page_path: window.location.pathname,
        });
        if (typeof window.twq === 'function') {
            event(TwitterTrackActions.pageview, {}, [Tracker.TWQ]);
        }
    },
    timedPageview(prevTimer, timeout = 10000) {
        window.clearTimeout(prevTimer);
        return window.setTimeout(track.pageview, timeout);
    },
};
if (!process.browser) {
    Object.keys(track).forEach((key) => (track[key] = noop));
}
//# sourceMappingURL=index.js.map