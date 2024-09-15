import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        href?: string;
        icon: string;
        count: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SocialActionLinkProps = typeof __propDef.props;
export type SocialActionLinkEvents = typeof __propDef.events;
export type SocialActionLinkSlots = typeof __propDef.slots;
export default class SocialActionLink extends SvelteComponent<SocialActionLinkProps, SocialActionLinkEvents, SocialActionLinkSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        href?: string;
        icon: string;
        count: number;
    }>);
    $$bindings: "";
}
export {};
