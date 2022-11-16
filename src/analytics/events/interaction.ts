import { TrackCategory } from './utils'

const track = TrackCategory('Interaction')

export const trackVote = ({
  id,
  feature,
  source,
}: {
  id: number
  feature: string
  source: string
}) => track('vote', { id, feature, source, source_url: window.location.href })

export const trackSaveCSV = ({ id, source }) =>
  track('save_csv', { id, source, source_url: window.location.href })

export const trackComment = ({ type, id, repliedTo, isReply = false }) =>
  track('comment', {
    id,
    type,
    replied_to: repliedTo,
    is_reply: isReply,
    source_url: window.location.href,
  })

export const trackShareFormOpen = (source: string) =>
  track('share_form_open', { source, source_url: window.location.href })

export const trackShareFormSubmit = ({ url, media }) =>
  track('share_form_submit', { url, media, source_url: window.location.href })

export const trackShareLinkCopy = (url: string) =>
  track('share_link_copy', { url, source_url: window.location.href })

export const trackFollowUser = ({ id, username, source }) =>
  track('follow_user', { id, username, source, source_url: window.location.href })

export const trackProfileClick = ({
  id,
  username,
  source,
}: {
  id: number
  username?: string
  source: string
}) => track('user_profile_click', { id, username, source, source_url: window.location.href })
