import { z } from 'zod';
export declare const zodSettingsSchema: z.ZodObject<{
    version: z.ZodNumber;
    type: z.ZodLiteral<"object">;
    required: z.ZodArray<z.ZodString, "many">;
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
    required: string[];
    version: number;
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
}, {
    type: "object";
    required: string[];
    version: number;
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
}>;
export type TSettingsSchema = z.infer<typeof zodSettingsSchema>;
