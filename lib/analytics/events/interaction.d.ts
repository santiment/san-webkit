export declare const trackVote: ({ id, feature, source, }: {
    id: number;
    feature: string;
    source: string;
}) => number;
export declare const trackSaveCSV: ({ id, source }: {
    id: any;
    source: any;
}) => number;
export declare const trackShowComments: ({ id, source }: {
    id: number | string;
    source: string;
}) => number;
export declare const trackComment: ({ type, id, repliedTo, isReply }: {
    type: any;
    id: any;
    repliedTo: any;
    isReply?: boolean | undefined;
}) => number;
export declare const trackShareFormOpen: (source: string) => number;
export declare const trackShareFormSubmit: ({ url, media }: {
    url: any;
    media: any;
}) => number;
export declare const trackShareLinkCopy: ({ url, source }: {
    url: any;
    source: any;
}) => number;
export declare const trackFollowUser: ({ id, username, source }: {
    id: any;
    username: any;
    source: any;
}) => number;
export declare const trackProfileClick: ({ id, username, source, }: {
    id: number;
    username?: string | undefined;
    source: string;
}) => number;
