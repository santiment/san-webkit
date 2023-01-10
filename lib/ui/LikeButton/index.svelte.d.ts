import { SvelteComponentTyped } from "svelte";
export type Votes = {
    totalVotes: number;
    userVotes: number;
};
export declare const newVotes: () => {
    totalVotes: number;
    userVotes: number;
};
export declare const VoteTypeFeature: {
    [K in VoteType]: string;
};
import { VoteType } from './../../api/vote';
declare const __propDef: {
    props: {
        class?: string | undefined;
        id: number;
        type: VoteType;
        disabled?: boolean | undefined;
        votes?: Votes | undefined;
        onVote: any;
        onVoted?: ((_: any) => any) | undefined;
        source: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
