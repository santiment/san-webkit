import { SANBASE_ORIGIN } from '$lib/utils/links.js'
import { onSupportClick } from '$lib/utils/support.js'

type TLink = {
  href: string
  title: string
  onclick?: (e: MouseEvent) => void
}

export const resourcesLinks: TLink[] = [
  {
    href: 'https://santiment.net/about/',
    title: 'About us',
  },

  { href: 'https://santiment.net/pricing/', title: 'Pricing' },
  { href: 'https://santiment.net/team/', title: 'Team' },
  { href: 'https://santiment.net/jobs/', title: 'Jobs' },
  { href: 'mailto:support@santiment.net', title: 'Contact us', onclick: onSupportClick },

  { href: SANBASE_ORIGIN + '/charts/', title: 'Charts' },
  { href: SANBASE_ORIGIN + '/screener/', title: 'Screener' },
  { href: SANBASE_ORIGIN + '/insights/', title: 'Insights' },
  { href: SANBASE_ORIGIN + '/social-trends/', title: 'Social trends' },
  { href: 'https://academy.santiment.net/', title: 'Academy' },

  { href: SANBASE_ORIGIN + '/', title: 'Sanbase' },
  { href: 'https://api.santiment.net/', title: 'SanAPI' },
  { href: 'https://sheets.santiment.net/', title: 'Sansheets' },
  { href: 'https://sanr.app/', title: 'SanR' },
]

export const socialMediaLinks = [
  {
    href: 'https://twitter.com/santimentfeed',
    id: 'twitter-x',
    width: 20,
    height: 16,
    label: 'X (Twitter)',
  },
  { href: 'https://github.com/santiment', id: 'github', width: 20, height: 20, label: 'GitHub' },
  { href: 'https://santiment.net/discord', id: 'discord', width: 20, height: 14, label: 'Discord' },
  {
    href: 'https://t.me/santiment_network',
    id: 'telegram',
    width: 20,
    height: 16,
    label: 'Telegram',
  },
  {
    href: 'https://www.youtube.com/c/santimentnetwork',
    id: 'youtube',
    width: 20,
    height: 14,
    label: 'YouTube',
  },
  { href: 'https://medium.com/santiment', id: 'medium', width: 16, height: 16, label: 'Medium' },
]
