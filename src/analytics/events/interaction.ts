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

export const trackSaveCSV = ({ id, feature, source }) =>
  track('save_csv', { id, feature, source, source_url: window.location.href })

export const trackShowComments = ({
  id,
  feature,
  source,
}: {
  id: number | string
  feature: string
  source: string
}) => track('show_comments', { id, feature, source, source_url: window.location.href })

export const trackComment = ({ type, id, repliedTo, isReply = false }) =>
  track('comment', {
    id,
    type,
    replied_to: repliedTo,
    is_reply: isReply,
    source_url: window.location.href,
  })

export const trackShareFormOpen = ({ feature, source }) =>
  track('share_form_open', { feature, source, source_url: window.location.href })

export const trackShareFormSubmit = ({ url, media }) =>
  track('share_form_submit', { url, media, source_url: window.location.href })

export const trackShareLinkCopy = ({ url, feature, source }) =>
  track('share_link_copy', { url, feature, source, source_url: window.location.href })

export const trackFollowUser = ({ id, username, source }) =>
  track('follow_user', { id, username, source, source_url: window.location.href })

export const trackProfileClick = ({
  id,
  username,
  feature,
  source,
}: {
  id: number
  feature?: string
  username?: string
  source: string
}) =>
  track('user_profile_click', { id, username, feature, source, source_url: window.location.href })

export const trackFullscreenClick = ({ source, type }: { source: string; type: string }) =>
  track('fullscreen_click', { source, type, source_url: window.location.href })

export const trackDownloadClick = ({ source, type }: { source: string; type: string }) =>
  track('download_click', { source, type, source_url: window.location.href })

export const trackCalendarChange = ({
  source,
  from,
  to,
}: {
  source: string
  from: string
  to: string
}) => track('calendar_change', { source, from, to, source_url: window.location.href })
