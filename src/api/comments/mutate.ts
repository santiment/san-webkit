import { mutate } from '@/api'
import { CommentsType, COMMENT_FIELDS } from './index'

// -----------------------------
// CREATE COMMENT
// -----------------------------

const CREATE_COMMENT_MUTATION = `
  mutation(
    $id: Int
    $parentId: Int 
    $content: String!
    $type: CommentEntityTypeEnum 
  ) {
    comment:createComment(id:$id, parentId:$parentId, content:$content, entityType:$type) {
      ${COMMENT_FIELDS}
    }
  }
`
type CreateCommentMutation = SAN.API.Query<'comment', SAN.Comment>

type CreateCommentVariables = {
  id: number
  content: string
  type: SAN.CommentsType
  parentId?: number
}

const accessor = ({ comment }: CreateCommentMutation) => comment
export const createComment = (variables: CreateCommentVariables) =>
  mutate<CreateCommentMutation>(CREATE_COMMENT_MUTATION, {
    variables,
  }).then(accessor)

export function createLayoutComment(id: number, content: string, parentId?: number, type?: SAN.CommentsType) {
  const variables = { id, content, parentId, type: type || CommentsType.Layout }
  return createComment(variables)
}

// -----------------------------
// UPDATE COMMENT
// -----------------------------

const UPDATE_COMMENT_MUTATION = `
  mutation($id: Int!, $content: String!) {
    updateComment(commentId:$id, content:$content) { id }
  }
`
export const updateComment = (id: number, content: string): Promise<void> =>
  mutate<any>(UPDATE_COMMENT_MUTATION, {
    variables: { id, content },
  })

// -----------------------------
// DELETE COMMENT
// -----------------------------

const DELETE_COMMENT_MUTATION = (id: number) => `
  mutation { deleteComment(commentId:${id}) { id } }
`
export const deleteComment = (id: number): Promise<void> => mutate<any>(DELETE_COMMENT_MUTATION(id))
