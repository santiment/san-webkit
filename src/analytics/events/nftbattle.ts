import { Page } from '@/ui/ChristmasNFTDialog/types'
import { TrackCategory } from './utils'

const track = TrackCategory('NFT Battle')

export const PageName = {
  [Page.Intro]: 'intro',
  [Page.Insight]: 'publish_insight',
  [Page.Top]: 'top_ten',
  [Page.Reward]: 'get_reward',
  [Page.Info]: 'info',
} as const

export const trackNftBattleCTA = (source: string) =>
  track('nft_battle_cta_button', {
    source,
    source_url: window.location.href,
  })

export const trackNftBattleDialogOpen = () =>
  track('nft_battle_dialog_open', {
    source_url: window.location.href,
  })

export const trackNftBattleDialogClose = (page: Page) =>
  track('nft_battle_dialog_close', {
    page: PageName[page],
    source_url: window.location.href,
  })

export const trackNftBattleStartGame = () =>
  track('nft_battle_start_game', {
    source_url: window.location.href,
  })

export const trackNftBattleGameDetailsPage = (page: Page, source: string, source_page: Page) =>
  track('nft_battle_game_details_page', {
    source,
    source_page: PageName[source_page],
    page: PageName[page],
  })

// export const trackNftBattleLinkClick = (source: string, source_page: string) =>
export function trackNftBattleLinkClick(e: MouseEvent) {
  const node = e.currentTarget as HTMLAnchorElement

  const url = node.getAttribute('href') as string
  const { source } = node.dataset

  return track('nft_battle_link_click', {
    source,
    url,
    source_url: window.location.href,
  })
}
