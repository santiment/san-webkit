import { SvelteComponentTyped } from "svelte";
import type { CurrentUser } from './flow';
declare const __propDef: {
    props: {
        class?: string | undefined;
        user: Pick<SAN.Author, 'id'>;
        currentUser: null | CurrentUser;
        isFollowing?: boolean | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IndexProps = typeof __propDef.props;
export declare type IndexEvents = typeof __propDef.events;
export declare type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
