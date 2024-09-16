import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        user: {
            id: number;
            username: string;
            email?: null | string;
            avatarUrl?: string;
        };
        publishedAt: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProfileProps = typeof __propDef.props;
export type ProfileEvents = typeof __propDef.events;
export type ProfileSlots = typeof __propDef.slots;
export default class Profile extends SvelteComponent<ProfileProps, ProfileEvents, ProfileSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        user: {
            id: number;
            username: string;
            email?: null | string;
            avatarUrl?: string;
        };
        publishedAt: string;
    }>);
    $$bindings: "";
}
export {};
