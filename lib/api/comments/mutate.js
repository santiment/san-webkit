import { mutate } from './../../api/index.js';
import { CommentsType, COMMENT_FIELDS } from './index.js';
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
`;
const accessor = ({ comment }) => comment;
export const createComment = (variables) => mutate(CREATE_COMMENT_MUTATION, {
    variables,
}).then(accessor);
// -----------------------------
// UPDATE COMMENT
// -----------------------------
const UPDATE_COMMENT_MUTATION = `
  mutation($id: Int!, $content: String!) {
    updateComment(commentId:$id, content:$content) { id }
  }
`;
export const updateComment = (id, content) => mutate(UPDATE_COMMENT_MUTATION, {
    variables: { id, content },
});
// -----------------------------
// DELETE COMMENT
// -----------------------------
const DELETE_COMMENT_MUTATION = (id) => `
  mutation { deleteComment(commentId:${id}) { id } }
`;
export const deleteComment = (id) => mutate(DELETE_COMMENT_MUTATION(id));
//# sourceMappingURL=mutate.js.map