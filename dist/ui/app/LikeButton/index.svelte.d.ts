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
import { VoteType } from './api.js';
type TProps = {
    class?: string;
    id: number | null | undefined;
    type: VoteType;
    disabled?: boolean;
    votes?: Votes;
    onVote?: () => void;
    onVoted?: () => void;
    source: string;
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
