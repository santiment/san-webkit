import type { TSeries } from '../../Chart/ctx/series.svelte.js';
export type TDocMetric = {
    apiMetricName: string;
    label: string;
    fullLabel: string;
    selector: string;
    fullSelector: string;
};
export declare const createVariableDefinition: (name: string, extra: {
    detail: string;
    documentation?: string;
    metric?: TDocMetric;
}) => {
    detail: string;
    documentation: string;
    metric?: TDocMetric;
    label: string;
    kind: 4;
    insertText: string;
};
export declare function createChartVariableDocumentation(metric: TDocMetric, varName: string, formula: TSeries['formula']['$']): string;
export declare const DEFINITIONS: {
    icon: string;
    documentation: string;
    label: string;
    detail: string;
    kind: 1;
    insertTextRules: 4;
    insertText: string;
    signature: {
        label: string;
        parameters: {
            label: string;
        }[];
    };
}[];
