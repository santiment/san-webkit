import { type Component, type ComponentProps } from 'svelte';
type TController<GResolved, GRejected> = {
    lock: () => void;
    lockWarn: () => void;
    unlock: () => void;
    checkIsLocked: (isForced?: boolean) => boolean;
    close: (isForced?: boolean) => void;
    resolve: GResolved;
    reject: GRejected;
};
type TRequiredKeys<T> = {
    [K in keyof T]-?: object extends Pick<T, K> ? never : K;
}[keyof T];
export type TDialogResolve<T = undefined> = T extends undefined ? () => void : (value: T) => void;
export type TDialogReject<T = undefined> = T extends undefined ? () => void : (value: T) => void;
export type TDialogProps<GResolved = undefined, GRejected = undefined> = {
    resolve: TDialogResolve<GResolved>;
    reject: TDialogReject<GRejected>;
    Controller: TController<TDialogResolve<GResolved>, TDialogReject<GRejected>>;
    source?: string;
};
export declare const CTX = "DialogController";
export declare const getDialogControllerCtx: <Resolved = unknown, Rejected = unknown>() => {
    Controller: TController<Resolved, Rejected>;
};
export declare const dialogs$: {
    "new"<GComponent extends Component<any>>(component: GComponent): TRequiredKeys<Omit<ComponentProps<GComponent>, "resolve" | "Controller" | "reject">> extends never ? (() => Promise<(ComponentProps<GComponent> extends Record<"resolve", infer Resolve> ? Resolve : never) extends (args: any) => any ? Parameters<ComponentProps<GComponent> extends Record<"resolve", infer Resolve> ? Resolve : never>[0] : unknown>) & ((props: Omit<ComponentProps<GComponent>, "resolve" | "Controller" | "reject">) => Promise<(ComponentProps<GComponent> extends Record<"resolve", infer Resolve> ? Resolve : never) extends (args: any) => any ? Parameters<ComponentProps<GComponent> extends Record<"resolve", infer Resolve> ? Resolve : never>[0] : unknown>) : (props: Omit<ComponentProps<GComponent>, "resolve" | "Controller" | "reject">) => Promise<(ComponentProps<GComponent> extends Record<"resolve", infer Resolve> ? Resolve : never) extends (args: any) => any ? Parameters<ComponentProps<GComponent> extends Record<"resolve", infer Resolve> ? Resolve : never>[0] : unknown>;
};
export {};
