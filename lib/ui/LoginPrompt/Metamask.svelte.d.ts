import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        isSignUp?: boolean | undefined;
        onClick: () => Promise<any>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type MetamaskProps = typeof __propDef.props;
export declare type MetamaskEvents = typeof __propDef.events;
export declare type MetamaskSlots = typeof __propDef.slots;
export default class Metamask extends SvelteComponentTyped<MetamaskProps, MetamaskEvents, MetamaskSlots> {
}
export {};
