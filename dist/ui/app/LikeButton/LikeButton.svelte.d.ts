type TProps = {
    class?: string;
    totalVotes?: number;
    userVotes?: number;
    disabled?: boolean;
    onVote?: () => void;
    hasBorder?: boolean;
    maxVotesPerUser?: number;
    voteInterval?: number;
};
declare const LikeButton: import("svelte").Component<TProps, {}, "totalVotes" | "userVotes">;
type LikeButton = ReturnType<typeof LikeButton>;
export default LikeButton;
