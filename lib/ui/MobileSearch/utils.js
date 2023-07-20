import { SANBASE_ORIGIN } from '@/utils/links';
import { getSEOLinkFromIdAndTitle } from '@/utils/url';
export var FILTER_ITEMS;
(function (FILTER_ITEMS) {
    FILTER_ITEMS["Assets"] = "Assets";
    FILTER_ITEMS["Trends"] = "Trends";
    FILTER_ITEMS["Insights"] = "Insights";
    FILTER_ITEMS["People"] = "People";
})(FILTER_ITEMS || (FILTER_ITEMS = {}));
export function getItemLink(item, type) {
    switch (type) {
        case FILTER_ITEMS.Assets: {
            return SANBASE_ORIGIN + '/projects/' + item.slug;
        }
        case FILTER_ITEMS.Trends: {
            return SANBASE_ORIGIN + '/labs/trends/explore/' + item;
        }
        case FILTER_ITEMS.Insights: {
            return 'https://insights.santiment.net/read/' + getSEOLinkFromIdAndTitle(item.id, item.title);
        }
        case FILTER_ITEMS.People: {
            return SANBASE_ORIGIN + '/profile/' + item.id;
        }
    }
}
//# sourceMappingURL=utils.js.map