import { query } from './../../api'
export var CommentsType
;(function (CommentsType) {
  CommentsType['Address'] = 'BLOCKCHAIN_ADDRESS'
  CommentsType['Layout'] = 'CHART_CONFIGURATION'
  CommentsType['Insight'] = 'INSIGHT'
  CommentsType['TimelineEvent'] = 'TIMELINE_EVENT'
  CommentsType['Proposal'] = 'WALLET_HUNTERS_PROPOSAL'
  CommentsType['Watchlist'] = 'WATCHLIST'
  CommentsType['Dashboard'] = 'DASHBOARD'
})(CommentsType || (CommentsType = {}))
export const COMMENT_FIELDS = `id
  content
  insertedAt
  editedAt
  parentId
  user {
    id
    username
    email
    avatarUrl
  }
`
const COMMENTS_QUERY = `
  query($id: ID, $type: CommentEntityTypeEnum){
    comments(id: $id, entityType:$type){
      ${COMMENT_FIELDS}
    }
  }
`
const accessor = ({ comments }) => comments
export const queryComments = (id, type) =>
  query(COMMENTS_QUERY, { variables: { id, type } }).then(accessor)
//# sourceMappingURL=index.js.map
