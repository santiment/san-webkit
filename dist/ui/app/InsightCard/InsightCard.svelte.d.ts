type $$ComponentProps = {
    insight: {
        id: string;
        title: string;
        user: {
            avatarUrl?: string;
            id: number;
            username: string;
            email?: string;
        };
        tags: {
            name: string;
        }[];
        publishedAt: string;
        commentsCount: number;
        votes: {
            currentUserVotes: number;
            totalVotes: number;
            userVotes: number;
        };
    };
};
declare const InsightCard: import("svelte").Component<$$ComponentProps, {}, "">;
type InsightCard = ReturnType<typeof InsightCard>;
export default InsightCard;
