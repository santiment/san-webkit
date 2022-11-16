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

export const trackExplorerItemCopyLink = ({ id, type }: { id: string; type: string }) =>
  track('explorer_item_copy_link', { id, type })

export const trackExplorerItemShowComments = ({ id, type }: { id: string; type: string }) =>
  track('explorer_item_show_comments', { id, type })

export const trackExplorerShowMore = ({ page, size }: { page: number; size: number }) =>
  track('explorer_show_more', { page, size })
