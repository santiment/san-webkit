import { getSEOLinkFromIdAndTitle } from '@/utils/url'

export enum FILTER_ITEMS {
  Assets = 'Assets',
  Trends = 'Trends',
  Insights = 'Insights',
  People = 'People',
}

export function getItemLink(item, type) {
  switch (type) {
    case FILTER_ITEMS.Assets: {
      return 'https://app.santiment.net/projects/' + item.slug
    }
    case FILTER_ITEMS.Trends: {
      return 'https://app.santiment.net/labs/trends/explore/' + item
    }
    case FILTER_ITEMS.Insights: {
      return 'https://insights.santiment.net/read/' + getSEOLinkFromIdAndTitle(item.id, item.title)
    }
    case FILTER_ITEMS.People: {
      return 'https://app.santiment.net/profile/' + item.id
    }
  }
}
