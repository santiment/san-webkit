import { type CreateDialogProps } from '@melt-ui/svelte';
export declare const TRANSITION_MS = 180;
export declare function useCreateDialog(onOpenChange: CreateDialogProps['onOpenChange']): {
    elements: {
        content: import("@melt-ui/svelte/internal/helpers").MeltElement<[import("svelte/store").Readable<boolean>, import("@melt-ui/svelte/internal/helpers").WithGet<import("svelte/store").Writable<string>>, import("@melt-ui/svelte/internal/helpers").WithGet<import("svelte/store").Writable<string>>, import("@melt-ui/svelte/internal/helpers").WithGet<import("svelte/store").Writable<string>>, {
            update: (updater: import("svelte/store").Updater<boolean>, sideEffect?: ((newValue: boolean) => void) | undefined) => void;
            set: (this: void, value: boolean) => void;
            subscribe(this: void, run: import("svelte/store").Subscriber<boolean>, invalidate?: import("svelte/store").Invalidator<boolean> | undefined): import("svelte/store").Unsubscriber;
            get: () => boolean;
            destroy?: (() => void) | undefined;
        }], (node: HTMLElement) => {
            destroy: () => void;
        }, ([$isVisible, $contentId, $descriptionId, $titleId, $open]: [boolean, string, string, string, boolean]) => {
            readonly id: string;
            readonly role: "dialog" | "alertdialog";
            readonly "aria-describedby": string;
            readonly "aria-labelledby": string;
            readonly "aria-modal": "true" | undefined;
            readonly "data-state": "open" | "closed";
            readonly tabindex: -1;
            readonly hidden: true | undefined;
            readonly style: string | undefined;
        }, string>;
        trigger: import("@melt-ui/svelte/internal/helpers").MeltElement<[{
            update: (updater: import("svelte/store").Updater<boolean>, sideEffect?: ((newValue: boolean) => void) | undefined) => void;
            set: (this: void, value: boolean) => void;
            subscribe(this: void, run: import("svelte/store").Subscriber<boolean>, invalidate?: import("svelte/store").Invalidator<boolean> | undefined): import("svelte/store").Unsubscriber;
            get: () => boolean;
            destroy?: (() => void) | undefined;
        }], (node: HTMLElement) => import("@melt-ui/svelte/internal/types").MeltActionReturn<import("@melt-ui/svelte/dist/builders/dialog/events.js").DialogEvents["trigger"]>, ([$open]: [boolean]) => {
            readonly "aria-haspopup": "dialog";
            readonly "aria-expanded": boolean;
            readonly type: "button";
        }, string>;
        title: import("@melt-ui/svelte/internal/helpers").MeltElement<[import("@melt-ui/svelte/internal/helpers").WithGet<import("svelte/store").Writable<string>>], import("svelte/action").Action<any, any, Record<never, any>>, ([$titleId]: [string]) => {
            readonly id: string;
        }, string>;
        description: import("@melt-ui/svelte/internal/helpers").MeltElement<[import("@melt-ui/svelte/internal/helpers").WithGet<import("svelte/store").Writable<string>>], import("svelte/action").Action<any, any, Record<never, any>>, ([$descriptionId]: [string]) => {
            readonly id: string;
        }, string>;
        overlay: import("@melt-ui/svelte/internal/helpers").MeltElement<[import("svelte/store").Readable<boolean>, {
            update: (updater: import("svelte/store").Updater<boolean>, sideEffect?: ((newValue: boolean) => void) | undefined) => void;
            set: (this: void, value: boolean) => void;
            subscribe(this: void, run: import("svelte/store").Subscriber<boolean>, invalidate?: import("svelte/store").Invalidator<boolean> | undefined): import("svelte/store").Unsubscriber;
            get: () => boolean;
            destroy?: (() => void) | undefined;
        }], import("svelte/action").Action<any, any, Record<never, any>>, ([$isVisible, $open]: [boolean, boolean]) => {
            readonly hidden: true | undefined;
            readonly tabindex: -1;
            readonly style: string | undefined;
            readonly "aria-hidden": true;
            readonly "data-state": "open" | "closed";
        }, string>;
        close: import("@melt-ui/svelte/internal/helpers").MeltElement<import("svelte/store").Stores | undefined, (node: HTMLElement) => import("@melt-ui/svelte/internal/types").MeltActionReturn<import("@melt-ui/svelte/dist/builders/dialog/events.js").DialogEvents["close"]>, () => {
            readonly type: "button";
        }, string>;
        portalled: import("@melt-ui/svelte/internal/helpers").MeltElement<import("@melt-ui/svelte/internal/helpers").WithGet<import("svelte/store").Writable<string | HTMLElement | null>>, <Node_1 extends any>(node: HTMLElement) => {
            destroy(): void;
        }, ($portal: string | HTMLElement | null) => {
            readonly "data-portal": "" | undefined;
        }, string>;
    };
    states: {
        open: {
            update: (updater: import("svelte/store").Updater<boolean>, sideEffect?: ((newValue: boolean) => void) | undefined) => void;
            set: (this: void, value: boolean) => void;
            subscribe(this: void, run: import("svelte/store").Subscriber<boolean>, invalidate?: import("svelte/store").Invalidator<boolean> | undefined): import("svelte/store").Unsubscriber;
            get: () => boolean;
            destroy?: (() => void) | undefined;
        };
    };
    close: (isForced?: boolean) => false | undefined;
};
