import { SvelteComponentTyped } from "svelte";
import { default as MediumEditor } from 'medium-editor';
declare const __propDef: {
    props: {
        class?: string | undefined;
        editor: MediumEditor.MediumEditor;
        node: any;
        html?: string | undefined;
        isComments?: boolean | undefined;
        placeholder: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EditorProps = typeof __propDef.props;
export type EditorEvents = typeof __propDef.events;
export type EditorSlots = typeof __propDef.slots;
export default class Editor extends SvelteComponentTyped<EditorProps, EditorEvents, EditorSlots> {
}
export {};
