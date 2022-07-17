import { query } from '@/api'

export enum CommentsType {
  Address = 'BLOCKCHAIN_ADDRESS',
  Layout = 'CHART_CONFIGURATION',
  Insight = 'INSIGHT',
  TimelineEvent = 'TIMELINE_EVENT',
  Proposal = 'WALLET_HUNTERS_PROPOSAL',
  Watchlist = 'WATCHLIST',
  Dashboard = 'DASHBOARD',
}

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

type CommentsQuery = SAN.API.Query<'comments', SAN.Comment[]>

const accessor = ({ comments }: CommentsQuery) => comments
export const queryComments = (id: number, type: SAN.CommentsType): Promise<SAN.Comment[]> =>
  query<CommentsQuery>(COMMENTS_QUERY, { variables: { id, type } }).then(accessor)
