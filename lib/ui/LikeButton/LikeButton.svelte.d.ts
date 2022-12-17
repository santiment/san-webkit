import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        totalVotes?: number | undefined;
        userVotes?: number | undefined;
        disabled?: boolean | undefined;
        onVote?: (() => void) | undefined;
        hasBorder?: boolean | undefined;
        maxVotesPerUser?: number | undefined;
        voteInterval?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type LikeButtonProps = typeof __propDef.props;
export declare type LikeButtonEvents = typeof __propDef.events;
export declare type LikeButtonSlots = typeof __propDef.slots;
export default class LikeButton extends SvelteComponentTyped<LikeButtonProps, LikeButtonEvents, LikeButtonSlots> {
}
export {};
