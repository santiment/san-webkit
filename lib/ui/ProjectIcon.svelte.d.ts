import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        slug: string;
        size?: number | undefined;
        placeholderSize?: number | undefined;
        logoUrl?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProjectIconProps = typeof __propDef.props;
export type ProjectIconEvents = typeof __propDef.events;
export type ProjectIconSlots = typeof __propDef.slots;
export default class ProjectIcon extends SvelteComponentTyped<ProjectIconProps, ProjectIconEvents, ProjectIconSlots> {
}
export {};
