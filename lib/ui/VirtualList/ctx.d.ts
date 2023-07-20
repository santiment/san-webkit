export type ControllerType = Partial<{
    scrollTo(index: number): void;
}>;
export declare const CTX = "VirtualListController";
export declare const Controller: () => Partial<{
    scrollTo(index: number): void;
}>;
export declare const getControllerCtx: () => Partial<{
    scrollTo(index: number): void;
}>;
