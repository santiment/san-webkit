import { SANBASE_ORIGIN } from '$lib/utils/links.js'

export const resourcesLinks = [
  {
    href: 'https://santiment.net/about/',
    title: 'About us',
  },

  { href: 'https://santiment.net/pricing/', title: 'Pricing' },
  { href: 'https://santiment.net/team/', title: 'Team' },
  { href: 'https://santiment.net/jobs/', title: 'Jobs' },
  { href: 'mailto:support@santiment.net', title: 'Contact us' },

  { href: 'https://academy.santiment.net/', title: 'Academy' },
  { href: 'https://insights.santiment.net/', title: 'Insights' },
  { href: SANBASE_ORIGIN + '/social-trends/', title: 'Social trends' },
  {
    href: SANBASE_ORIGIN + '/labs/balance/',
    title: 'Historical balance',
  },
  {
    href: 'https://academy.santiment.net/san-tokens/how-to-buy-san-tokens/',
    title: 'Buy SAN',
  },

  { href: SANBASE_ORIGIN + '/', title: 'Sanbase' },
  { href: 'https://api.santiment.net/', title: 'SanAPI' },
  { href: 'https://sheets.santiment.net/', title: 'Sansheets' },
]

export const socialMediaLinks = [
  {
    href: 'https://twitter.com/santimentfeed',
    id: 'twitter',
    width: 20,
    height: 16,
    label: 'Twitter',
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
