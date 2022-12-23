import { Page } from './../../ui/ChristmasNFTDialog/types';
import { TrackCategory } from './utils';
const track = TrackCategory('NFT Battle');
export const PageName = {
    [Page.Intro]: 'intro',
    [Page.Insight]: 'publish_insight',
    [Page.Top]: 'top_ten',
    [Page.Reward]: 'get_reward',
    [Page.Info]: 'info',
};
export const trackNftBattleCTA = (source) => track('nft_battle_cta_button', {
    source,
    source_url: window.location.href,
});
export const trackNftBattleDialogOpen = () => track('nft_battle_dialog_open', {
    source_url: window.location.href,
});
export const trackNftBattleDialogClose = (page) => track('nft_battle_dialog_close', {
    page: PageName[page],
    source_url: window.location.href,
});
export const trackNftBattleStartGame = () => track('nft_battle_start_game', {
    source_url: window.location.href,
});
export const trackNftBattleGameDetailsPage = (page, source, source_page) => track('nft_battle_game_details_page', {
    source,
    source_page: PageName[source_page],
    page: PageName[page],
});
export function trackNftBattleLinkClick(e) {
    const node = e.currentTarget;
    const url = node.getAttribute('href');
    const { source } = node.dataset;
    return track('nft_battle_link_click', {
        source,
        url,
        source_url: window.location.href,
    });
}
export const trackNftBattlePlayersTablePagination = (page, action) => track('nft_battle_players_table_pagination', {
    page,
    action,
    source_url: window.location.href,
});
//# sourceMappingURL=nftbattle.js.map