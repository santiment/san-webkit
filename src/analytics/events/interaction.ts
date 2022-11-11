import { TrackCategory } from './utils'

const track = TrackCategory('Interaction')

export const trackLike = ({ liked_feature, liked_source }) =>
  track('like', {
    liked_feature,
    liked_source,
  })

export const trackSaveCSV = ({ save_csv_source, liked_content_id }) =>
  track('save_csv', {
    save_csv_source,
    liked_content_id,
  })

export const trackComment = ({ commented_feature, commented_feature_id, is_reply }) =>
  track('comment', {
    commented_feature,
    commented_feature_id,
    is_reply,
  })

export const trackFormOpen = ({ shared_from }) => track('share_form_open', { shared_from })

export const trackFormSubmit = ({ shared_to }) => track('share_form_submit', { shared_to })

export const trackShareLinkCopy = ({ share_link_id }) => track('share_link_copy', { share_link_id })

export const trackFollowUser = ({ id, user_name, click_source }) =>
  track('follow_user', { id, user_name, click_source })

export const trackProfileClick = ({ id, user_name, click_source }) =>
  track('user_profile_click', {
    id,
    user_name,
    click_source,
  })
