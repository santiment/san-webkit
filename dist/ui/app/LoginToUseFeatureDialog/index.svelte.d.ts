import { type TDialogProps } from '../../core/Dialog/index.js';
export declare const showLoginToUseFeatureDialog$: () => (() => Promise<undefined>) & ((props: Omit<{
    from?: string;
} & TDialogProps, "resolve" | "reject" | "Controller">) => Promise<undefined>);
type TProps = {
    from?: string;
} & TDialogProps;
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
