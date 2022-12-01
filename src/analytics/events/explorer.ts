import { TrackCategory } from './utils'

const track = TrackCategory('Explorer')

// Favorites, New, By Santiment, My creations, My likes
export const trackExplorerFiltersUse = (filter: string) => track('explorer_filters_use', { filter })

// Insights, Charts, Watchlists, Screeners
export const trackExplorerFeaturesFilter = ({
  feature,
  features,
  isRemoved,
}: {
  feature: string
  features: string[]
  isRemoved: boolean
}) => track('explorer_features_filter', { feature, features, is_removed: isRemoved })

export const trackExplorerShowMore = ({ page, size }: { page: number; size: number }) =>
  track('explorer_show_more', { page, size })

export const trackExplorerItemOpened = ({ id, feature }) =>
  track('explorer_item_opened', { id, feature })
