import { getSavedJson, saveJson } from './localStorage.js';
export const KEY = 'RECENT_ITEMS';
export var RecentType;
(function (RecentType) {
    RecentType["CHART_LAYOUT"] = "chart_layout";
    RecentType["WATCHLIST"] = "watchlist";
    RecentType["SCREENER"] = "screener";
})(RecentType || (RecentType = {}));
export const getRecents = (maxAmount = 30) => (getSavedJson(KEY, []) || []).slice(0, maxAmount);
export const saveRecents = (recents, maxAmount = 30) => saveJson(KEY, recents.slice(0, maxAmount));
export const removeRecent = (type, id) => getRecents().filter((recent) => !(recent.type === type && +recent.id === +id));
export function addRecent(type, id, maxAmount = 30) {
    return saveRecents([{ type, id }, ...removeRecent(type, id)], maxAmount);
}
//# sourceMappingURL=recents.js.map