type CreateCommentVariables = {
    id: number;
    content: string;
    type: SAN.CommentsType;
    parentId?: number;
};
export declare const createComment: (variables: CreateCommentVariables) => Promise<SAN.Comment>;
export declare const updateComment: (id: number, content: string) => Promise<void>;
export declare const deleteComment: (id: number) => Promise<void>;
export {};
