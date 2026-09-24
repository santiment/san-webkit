import { z } from 'zod';
export declare const zodSettingsSchema: z.ZodObject<{
    version: z.ZodNumber;
    type: z.ZodLiteral<"object">;
    required: z.ZodArray<z.ZodString, "many">;
    order: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, Record<string, number>, string[]>>;
    properties: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
        label: z.ZodString;
        type: z.ZodEnum<["integer", "number"]>;
        placeholder: z.ZodOptional<z.ZodString>;
        minimum: z.ZodOptional<z.ZodNumber>;
        maximum: z.ZodOptional<z.ZodNumber>;
        default: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        type: "number" | "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        placeholder?: string | undefined;
    }, {
        label: string;
        type: "number" | "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        placeholder?: string | undefined;
    }>, z.ZodObject<{
        label: z.ZodString;
        enumType: z.ZodEnum<["allExchanges", "availableLabelFqns", "getLabelBasedMetricOwners", "getLabelBasedMetricLabels"]>;
        placeholder: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        enumType: "allExchanges" | "availableLabelFqns" | "getLabelBasedMetricOwners" | "getLabelBasedMetricLabels";
        default?: any;
        placeholder?: string | undefined;
    }, {
        label: string;
        enumType: "allExchanges" | "availableLabelFqns" | "getLabelBasedMetricOwners" | "getLabelBasedMetricLabels";
        default?: any;
        placeholder?: string | undefined;
    }>]>>;
}, "strip", z.ZodTypeAny, {
    type: "object";
    version: number;
    required: string[];
    properties: Record<string, {
        label: string;
        type: "number" | "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        placeholder?: string | undefined;
    } | {
        label: string;
        enumType: "allExchanges" | "availableLabelFqns" | "getLabelBasedMetricOwners" | "getLabelBasedMetricLabels";
        default?: any;
        placeholder?: string | undefined;
    }>;
    order?: Record<string, number> | undefined;
}, {
    type: "object";
    version: number;
    required: string[];
    properties: Record<string, {
        label: string;
        type: "number" | "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        placeholder?: string | undefined;
    } | {
        label: string;
        enumType: "allExchanges" | "availableLabelFqns" | "getLabelBasedMetricOwners" | "getLabelBasedMetricLabels";
        default?: any;
        placeholder?: string | undefined;
    }>;
    order?: string[] | undefined;
}>;
export type TSettingsSchema = z.infer<typeof zodSettingsSchema>;
export declare const zodGranularityRulesSchema: z.ZodEffects<z.ZodArray<z.ZodObject<{
    maxTimeRangeDays: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodNumber>>, number, number | null | undefined>;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    maxTimeRangeDays: number;
}, {
    value: string;
    maxTimeRangeDays?: number | null | undefined;
}>, "many">, {
    value: string;
    maxTimeRangeDays: number;
}[], {
    value: string;
    maxTimeRangeDays?: number | null | undefined;
}[]>;
export type TGranularityRulesSchema = z.infer<typeof zodGranularityRulesSchema>;
