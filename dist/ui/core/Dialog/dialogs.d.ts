import { type ComponentConstructorOptions } from 'svelte';
type TController<GResolved, GRejected> = {
    lock: () => void;
    lockWarn: () => void;
    unlock: () => void;
    close: () => void;
    resolve: GResolved;
    reject: GRejected;
};
export type TDialogResolve<T = undefined> = T extends undefined ? () => void : (value: T) => void;
export type TDialogReject<T = undefined> = T extends undefined ? () => void : (value: T) => void;
export type TDialogProps<GResolved = undefined, GRejected = undefined> = {
    resolve: TDialogResolve<GResolved>;
    reject: TDialogReject<GRejected>;
    Controller: TController<TDialogResolve<GResolved>, TDialogReject<GRejected>>;
};
type TGenericComponent<Props extends Record<string, any> = any> = new (options: ComponentConstructorOptions<Props>) => any;
export declare const CTX = "DialogController";
export declare const getDialogControllerCtx: <Resolved = unknown, Rejected = unknown>() => {
    Controller: TController<Resolved, Rejected>;
};
export declare const dialogs$: {
    "new"<TComponent extends TGenericComponent<any>>(component: TComponent): Omit<TComponent extends TGenericComponent<infer Props extends Record<string, any>> ? Props : never, "reject" | "Controller" | "resolve"> extends Record<string, never> ? () => Promise<((TComponent extends TGenericComponent<infer Props extends Record<string, any>> ? Props : never) extends Record<"resolve", infer Resolve> ? Resolve : never) extends (args: any) => any ? Parameters<(TComponent extends TGenericComponent<infer Props extends Record<string, any>> ? Props : never) extends Record<"resolve", infer Resolve> ? Resolve : never>[0] : unknown> : (props: Omit<TComponent extends TGenericComponent<infer Props extends Record<string, any>> ? Props : never, "reject" | "Controller" | "resolve">) => Promise<((TComponent extends TGenericComponent<infer Props extends Record<string, any>> ? Props : never) extends Record<"resolve", infer Resolve> ? Resolve : never) extends (args: any) => any ? Parameters<(TComponent extends TGenericComponent<infer Props extends Record<string, any>> ? Props : never) extends Record<"resolve", infer Resolve> ? Resolve : never>[0] : unknown>;
};
export {};
