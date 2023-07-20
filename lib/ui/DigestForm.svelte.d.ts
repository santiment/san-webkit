import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DigestFormProps = typeof __propDef.props;
export type DigestFormEvents = typeof __propDef.events;
export type DigestFormSlots = typeof __propDef.slots;
export default class DigestForm extends SvelteComponentTyped<DigestFormProps, DigestFormEvents, DigestFormSlots> {
}
export {};
