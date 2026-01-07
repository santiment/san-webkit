export declare const showShareDialog$: () => (() => Promise<undefined>) & ((props: Omit<{
    title?: string;
    entity?: string;
    data?: {
        title?: string;
        text?: string;
        link?: string;
    };
    isAuthor?: boolean;
    isPublic?: boolean;
    onPublicityToggle?: VoidFunction;
    feature?: string;
    source?: string;
} & TDialogProps, "resolve" | "Controller" | "reject">) => Promise<undefined>);
import { type TDialogProps } from '../Dialog/index.js';
type TProps = {
    title?: string;
    entity?: string;
    data?: {
        title?: string;
        text?: string;
        link?: string;
    };
    isAuthor?: boolean;
    isPublic?: boolean;
    onPublicityToggle?: VoidFunction;
    feature?: string;
    source?: string;
} & TDialogProps;
declare const ShareDialog: import("svelte").Component<TProps, {}, "">;
type ShareDialog = ReturnType<typeof ShareDialog>;
export default ShareDialog;
