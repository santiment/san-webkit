import { type TDialogProps } from '../../core/Dialog/index.js';
export declare const showLoginToUseFeatureDialog$: () => (() => Promise<undefined>) & ((props: Omit<TDialogProps, "resolve" | "reject" | "Controller">) => Promise<undefined>);
declare const Index: import("svelte").Component<TDialogProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
