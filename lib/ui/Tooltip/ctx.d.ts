/// <reference types="svelte" />
export type Props = {
    isEnabled: boolean;
    [key: string]: any;
};
type TooltipHook = (node: Element, data: Props) => {
    update: (data: Props) => void;
    destroy: () => void;
};
type CtxType = Map<string, TooltipHook>;
export declare const newAppTooltipsCtx: () => CtxType;
export declare function useAppTooltipsCtx(id: string, hook: TooltipHook): import("svelte/store").Readable<null>;
export declare const getAppTooltipsCtx: () => CtxType;
export declare function getAppTooltipCtx(id: string): TooltipHook | undefined;
export {};
