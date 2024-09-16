import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ConnectMetamaskProps = typeof __propDef.props;
export type ConnectMetamaskEvents = typeof __propDef.events;
export type ConnectMetamaskSlots = typeof __propDef.slots;
export default class ConnectMetamask extends SvelteComponent<ConnectMetamaskProps, ConnectMetamaskEvents, ConnectMetamaskSlots> {
}
export {};
