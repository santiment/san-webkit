import { SvelteComponent } from "svelte";
import type { ComponentProps } from 'svelte';
import Button from '../../core/Button/index.js';
declare const __propDef: {
    props: {
        class?: string;
        ref?: ComponentProps<Button>["ref"];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProfilePictureProps = typeof __propDef.props;
export type ProfilePictureEvents = typeof __propDef.events;
export type ProfilePictureSlots = typeof __propDef.slots;
export default class ProfilePicture extends SvelteComponent<ProfilePictureProps, ProfilePictureEvents, ProfilePictureSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string;
        ref?: ComponentProps<Button>["ref"];
    }>);
    $$bindings: "";
}
export {};
