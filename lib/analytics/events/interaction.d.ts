export declare const trackVote: ({ id, feature, source, }: {
    id: number;
    feature: string;
    source: string;
}) => number;
export declare const trackSaveCSV: ({ id, feature, source }: {
    id: any;
    feature: any;
    source: any;
}) => number;
export declare const trackShowComments: ({ id, feature, source, }: {
    id: number | string;
    feature: string;
    source: string;
}) => number;
export declare const trackComment: ({ type, id, repliedTo, isReply }: {
    type: any;
    id: any;
    repliedTo: any;
    isReply?: boolean | undefined;
}) => number;
export declare const trackShareFormOpen: ({ feature, source }: {
    feature: any;
    source: any;
}) => number;
export declare const trackShareFormSubmit: ({ url, media }: {
    url: any;
    media: any;
}) => number;
export declare const trackShareLinkCopy: ({ url, feature, source }: {
    url: any;
    feature: any;
    source: any;
}) => number;
export declare const trackFollowUser: ({ id, username, source }: {
    id: any;
    username: any;
    source: any;
}) => number;
export declare const trackProfileClick: ({ id, username, feature, source, }: {
    id: number;
    feature?: string | undefined;
    username?: string | undefined;
    source: string;
}) => number;
export declare const trackFullscreenClick: ({ source, type }: {
    source: string;
    type: string;
}) => number;
export declare const trackDownloadClick: ({ source, type }: {
    source: string;
    type: string;
}) => number;
export declare const trackCalendarChange: ({ source, from, to, }: {
    source: string;
    from: string;
    to: string;
}) => number;
