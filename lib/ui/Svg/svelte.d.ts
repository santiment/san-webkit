export { default } from './index.svelte';
export type Props = {
    className?: string;
    /** Width of the svg */
    w?: string | number;
    /** Height of the svg, defaults to the 'w' prop value */
    h?: string | number;
    /**
     * Is an illustration?
     * @default false  */
    illus?: boolean;
    /** WIll be replaced with union of id in lib */
    id: "404" | "alien" | "browser" | "comment-bubble" | "cookies" | "editorial-mobile" | "editorial" | "empty-search" | "empty" | "google-app" | "mastercard" | "plus" | "rocket" | "sad-cat" | "san-logo" | "santiment-sanbase" | "santiment" | "sorted" | "visa" | "warning" | "academy-hat" | "add-list" | "alert" | "arrow-down" | "arrow-left-big" | "arrow-right-big" | "arrow-right" | "arrow" | "asset-small" | "back-to-top" | "bars" | "bell" | "braces" | "calendar" | "chart" | "chat" | "checkmark-circle-filled" | "checkmark-circle" | "checkmark-large" | "checkmark" | "circle-line" | "close-small" | "close" | "cloud" | "cmd-key" | "cog" | "collapse" | "columns" | "comment" | "compare" | "confetti" | "copy" | "cross" | "crown" | "cursor" | "dashboard" | "delete-small" | "delete" | "description-filled" | "description" | "discord-outline" | "discord" | "dollar" | "dots-circle" | "download" | "email" | "embed" | "envelope" | "error" | "external-link" | "eye-crossed" | "eye" | "facebook" | "filter" | "fire-filled" | "fire" | "flash" | "folder" | "follow" | "following" | "fullscreen" | "fx" | "github" | "google" | "horz-dots" | "hray" | "image" | "info" | "insight" | "insights" | "interval" | "light" | "lightbulb" | "like" | "line" | "link" | "linked-in" | "locked-filled" | "locked-small" | "locked" | "logout" | "market" | "menu" | "merge" | "metamask" | "minus-circle" | "mobile-menu" | "new-folder" | "nft" | "note" | "pencil" | "pie" | "plus-circle-filled" | "plus-circle" | "plus" | "pointer" | "products-toggle" | "queries" | "query" | "question-circle" | "reddit" | "refresh" | "report" | "right-arrow" | "rocket-alt" | "rocket-filled" | "rocket" | "santiment" | "save" | "screener" | "search" | "share-dots" | "share" | "sidebar" | "smile" | "social-trend" | "sorting" | "stack" | "star-filled" | "star" | "table" | "telegram" | "time" | "toggle-visibility" | "toggle" | "triangle" | "twitter" | "unlocked" | "user" | "vert-dots" | "wallet" | "warning" | "watchlist" | "youtube-outline" | "youtube" | "christmas/left-top-snow" | "christmas/right-snow" | "christmas/xmas-hat" | "nav/feed" | "nav/insights" | "nav/market" | "nav/menu" | "nav/watchlists" | "halloween/batman" | "halloween/flame" | "halloween/halloween-banner" | "halloween/halloween-discount-27" | "halloween/halloween-discount-54" | "halloween/halloween-sales" | "halloween/san-logo-halloween" | "products/insights" | "products/sanapi" | "products/sanbase" | "products/sandata" | "products/sanhunters" | "products/sanr" | "products/sansheets" | "products/sanx" | "san-api/banner" | "san-api/onboarding" | "san-api/questionnaire" | "editor/bold" | "editor/heading" | "editor/italic" | "editor/link" | "editor/list" | "editor/quotes" | "editor/subtitle" | "editor/title" | "editor/underline";
};
