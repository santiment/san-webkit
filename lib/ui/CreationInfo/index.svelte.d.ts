import { SvelteComponentTyped } from "svelte";
import type { CreationType } from './../../ui/Profile/types';
import type { Votes } from './../../ui/LikeButton/index.svelte';
declare const __propDef: {
    props: {
        id: number;
        title: string;
        user: SAN.Author;
        currentUser: SAN.CurrentUser | null;
        onEditClick: () => any;
        type: CreationType;
        fallback?: string | undefined;
        editLabel?: string | undefined;
        comments: {
            count: number;
            active?: boolean;
            onClick: () => any;
        };
        votes: Votes;
        onVote: any;
        titleHoverTooltipClass?: string | undefined;
        hasInfo?: boolean | undefined;
        source: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        info: {};
    };
};
export declare type IndexProps = typeof __propDef.props;
export declare type IndexEvents = typeof __propDef.events;
export declare type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
