export declare const trackExplorerFiltersUse: (filter: string) => number;
export declare const trackExplorerFeaturesFilter: ({ feature, features, isRemoved, }: {
    feature: string;
    features: string[];
    isRemoved: boolean;
}) => number;
export declare const trackExplorerShowMore: ({ page, size }: {
    page: number;
    size: number;
}) => number;
export declare const trackExplorerItemOpened: ({ id, feature }: {
    id: any;
    feature: any;
}) => number;
export declare const trackExplorerSidepanel: ({ type, action, error, }: {
    type: 'social_trends' | 'bi_weekly_reports' | 'sheets_templates';
    action: 'item_click' | 'show_more' | 'source_page_open';
    error?: "free_user" | undefined;
}) => number;
