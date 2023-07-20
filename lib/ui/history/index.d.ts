import type { Writable } from 'svelte/store';
export type HistoryEmitter = Writable<AppliedCommand | undefined>;
export type Emitter = (appliedCommand: AppliedCommand | undefined) => void;
export declare enum Action {
    Undo = "Undo",
    Redo = "Redo"
}
export type Command = {
    name: string;
    undo: () => void;
    redo: () => void;
};
export type AppliedCommand = {
    action: Action;
    name: string;
};
export type History = ReturnType<typeof newHistory>;
export declare function newHistory(emitter?: Emitter): {
    get(): Command[];
    getCursor(): number;
    add(name: string, undo: () => void, redo?: () => void): void;
    undo(): void;
    redo(): void;
};
export declare const CONTEXT = "USER_COMMANDS_HISTORY";
export declare const getHistoryContext: () => ReturnType<typeof newHistory>;
export declare const newHistoryEmitter: () => HistoryEmitter;
export declare function newHistoryContext(emitter?: Emitter): {
    get(): Command[];
    getCursor(): number;
    add(name: string, undo: () => void, redo?: () => void): void;
    undo(): void;
    redo(): void;
};
export type Scrollable = {
    scrollIntoView: () => {};
};
export declare const scroll: <T extends Scrollable>(target: T) => {};
export declare function withScroll<T extends Scrollable>(target: T, clb: () => void): () => void;
