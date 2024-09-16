import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NotificationsProps = typeof __propDef.props;
export type NotificationsEvents = typeof __propDef.events;
export type NotificationsSlots = typeof __propDef.slots;
export default class Notifications extends SvelteComponent<NotificationsProps, NotificationsEvents, NotificationsSlots> {
}
export {};
