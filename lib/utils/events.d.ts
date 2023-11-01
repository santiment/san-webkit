/// <reference types="svelte" />
export declare function newGlobalShortcut(shortcut: string, clb: () => any, disableInputs?: boolean): () => void;
export declare function GlobalShortcut$(shortcut: string, clb: () => any, disableInputs?: boolean): import("svelte/store").Readable<null>;
