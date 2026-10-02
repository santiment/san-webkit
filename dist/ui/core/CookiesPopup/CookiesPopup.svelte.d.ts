export declare const CookiesStyle: {
    readonly API: "--fill: #dae0fd; --shadow: #5275ff;";
    readonly SHEETS: "--fill: #b0ebdb; --shadow: #21b074;";
};
type TCookiesStyle = typeof CookiesStyle;
type TCookiesStyles = TCookiesStyle[keyof TCookiesStyle];
type TProps = {
    class?: string;
    style?: string | TCookiesStyles;
    isVisible?: boolean;
};
declare const CookiesPopup: import("svelte").Component<TProps, {}, "">;
type CookiesPopup = ReturnType<typeof CookiesPopup>;
export default CookiesPopup;
