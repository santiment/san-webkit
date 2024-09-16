import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
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
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InsightCardProps = typeof __propDef.props;
export type InsightCardEvents = typeof __propDef.events;
export type InsightCardSlots = typeof __propDef.slots;
export default class InsightCard extends SvelteComponent<InsightCardProps, InsightCardEvents, InsightCardSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
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
    }>);
    $$bindings: "";
}
export {};
