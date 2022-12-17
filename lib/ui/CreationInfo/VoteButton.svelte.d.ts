import { SvelteComponentTyped } from "svelte";
import type { Votes } from '../LikeButton/index.svelte';
import { CreationType } from './../../ui/Profile/types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        id: number;
        type: CreationType;
        disabled?: boolean | undefined;
        votes?: Votes | undefined;
        onVote: any;
        source: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type VoteButtonProps = typeof __propDef.props;
export declare type VoteButtonEvents = typeof __propDef.events;
export declare type VoteButtonSlots = typeof __propDef.slots;
export default class VoteButton extends SvelteComponentTyped<VoteButtonProps, VoteButtonEvents, VoteButtonSlots> {
}
export {};
