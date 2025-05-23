export function fetchMetricsRestrictions(): Promise<Record<string, {
    minInterval: string;
    restrictedFrom: null | string;
    restrictedTo: null | string;
    docs: {
        description?: string;
        academyLinks: string[];
    };
}>>;
export function replaceDefaultMetricsRestrictionsSource(src: string, data: string): string;
