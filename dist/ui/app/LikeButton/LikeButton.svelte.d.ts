import { type TVoteType } from './api.js';
type TProps = {
    id: number | null | undefined;
    type: TVoteType;
    source: string;
    class?: string;
    totalVotes?: number;
    userVotes?: number;
    disabled?: boolean;
    onVote?: () => void;
    onVoted?: () => void;
    hasBorder?: boolean;
    maxVotesPerUser?: number;
    voteInterval?: number;
};
declare const LikeButton: import("svelte").Component<TProps, {}, "totalVotes" | "userVotes">;
type LikeButton = ReturnType<typeof LikeButton>;
export default LikeButton;
