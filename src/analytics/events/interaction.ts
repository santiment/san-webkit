import { TrackCategory } from './utils'

const track = TrackCategory('Interaction')

export const trackLike = ({
  id,
  feature,
  source,
}: {
  id: number
  feature: string
  source: string
}) => track('like', { id, feature, source })

export const trackSaveCSV = ({ id, source }) => track('save_csv', { id, source })

export const trackComment = ({ type, id, repliedTo, isReply = false }) =>
  track('comment', {
    id,
    type,
    replied_to: repliedTo,
    is_reply: isReply,
  })

export const trackFormOpen = (type: string) => track('share_form_open', { type })

export const trackFormSubmit = (shared_to: string) => track('share_form_submit', { shared_to })

export const trackShareLinkCopy = (url: string) => track('share_link_copy', { url })

export const trackFollowUser = ({ id, username, source }) =>
  track('follow_user', { id, username, source })

export const trackProfileClick = ({ id, username, source }) =>
  track('user_profile_click', { id, username, source })
