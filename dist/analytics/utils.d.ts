export declare const scriptTag: () => HTMLScriptElement;
export declare function newHeadScript(content: string | undefined, options?: {
    [key: string]: any;
}, onload?: () => void): HTMLScriptElement;
