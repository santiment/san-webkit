import { Page } from './../../ui/ChristmasNFTDialog/types';
export declare const PageName: {
    readonly 0: "intro";
    readonly 1: "publish_insight";
    readonly 2: "top_ten";
    readonly 3: "get_reward";
    readonly 4: "info";
};
export declare const trackNftBattleCTA: (source: string) => number;
export declare const trackNftBattleDialogOpen: () => number;
export declare const trackNftBattleDialogClose: (page: Page) => number;
export declare const trackNftBattleStartGame: () => number;
export declare const trackNftBattleGameDetailsPage: (page: Page, source: string, source_page: Page) => number;
export declare function trackNftBattleLinkClick(e: MouseEvent): number;
export declare const trackNftBattlePlayersTablePagination: (page: number, action: 'next' | 'prev') => number;
