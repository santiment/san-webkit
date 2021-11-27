declare namespace SAN {
  type CommentsType = import('../api/comments').CommentsType

  type Comment = {
    id: number
    parentId: null | number
    content: string
    insertedAt: string
    editedAt: null | string
    user: SAN.Author
  }

  type CommentsFor = {
    id: number
    user: SAN.Author
  }
}
