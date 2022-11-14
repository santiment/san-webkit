import { getSEOLinkFromIdAndTitle } from '@/utils/url'

export enum FILTER_ITEMS {
  Assets = 'Assets',
  Trends = 'Trends',
  Insights = 'Insights',
  People = 'People',
}

export function getItemLink(item, filter) {
  if (filter === FILTER_ITEMS.Assets) {
    return 'https://app.santiment.net/projects/' + item.slug
  }

  if (filter === FILTER_ITEMS.Trends) {
    return 'https://app.santiment.net/labs/trends/explore/' + item
  }

  if (filter === FILTER_ITEMS.Insights) {
    return 'https://insights.santiment.net/read/' + getSEOLinkFromIdAndTitle(item)
  }

  if (filter === FILTER_ITEMS.People) {
    return 'https://app.santiment.net/profile/' + item.id
  }
}
