import { SvelteComponentTyped } from "svelte";
import type { CreationType } from './../../ui/Profile/types';
import type { Votes } from './../../ui/LikeButton/index.svelte';
declare const __propDef: {
    props: {
        id?: number | null | undefined;
        title?: string | null | undefined;
        user?: SAN.Author | null | undefined;
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
        votes?: Votes | null | undefined;
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
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
