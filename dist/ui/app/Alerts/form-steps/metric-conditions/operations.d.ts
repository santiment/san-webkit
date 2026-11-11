import { type TApiOperation } from '../../operations.js';
declare const SimpleOperations: {
    readonly above: {
        readonly label: "Above";
        readonly describe: ([value]: [string, string]) => string;
        readonly icon: "condition/above";
    } & Record<"key", "above">;
    readonly below: {
        readonly label: "Below";
        readonly describe: ([value]: [string, string]) => string;
        readonly icon: "condition/below";
    } & Record<"key", "below">;
    readonly inside_channel: {
        readonly label: "In range";
        readonly describe: ([left, right]: [string, string]) => string;
        readonly icon: "condition/in-range";
    } & Record<"key", "inside_channel">;
    readonly outside_channel: {
        readonly label: "Out of range";
        readonly describe: ([left, right]: [string, string]) => string;
        readonly icon: "condition/out-of-range";
    } & Record<"key", "outside_channel">;
    readonly percent_up: {
        readonly label: "Increase %";
        readonly describe: ([value]: [string, string]) => string;
        readonly icon: "condition/percent-up";
    } & Record<"key", "percent_up">;
    readonly percent_down: {
        readonly label: "Decrease %";
        readonly describe: ([value]: [string, string]) => string;
        readonly icon: "condition/percent-down";
    } & Record<"key", "percent_down">;
};
export declare const Operations: {
    percent_up_or_down: {
        readonly label: "Change %";
        readonly describe: ([value]: [string, string]) => string;
        readonly icon: "condition/percent-change";
    } & Record<"key", "percent_up_or_down">;
    above: {
        readonly label: "Above";
        readonly describe: ([value]: [string, string]) => string;
        readonly icon: "condition/above";
    } & Record<"key", "above">;
    below: {
        readonly label: "Below";
        readonly describe: ([value]: [string, string]) => string;
        readonly icon: "condition/below";
    } & Record<"key", "below">;
    inside_channel: {
        readonly label: "In range";
        readonly describe: ([left, right]: [string, string]) => string;
        readonly icon: "condition/in-range";
    } & Record<"key", "inside_channel">;
    outside_channel: {
        readonly label: "Out of range";
        readonly describe: ([left, right]: [string, string]) => string;
        readonly icon: "condition/out-of-range";
    } & Record<"key", "outside_channel">;
    percent_up: {
        readonly label: "Increase %";
        readonly describe: ([value]: [string, string]) => string;
        readonly icon: "condition/percent-up";
    } & Record<"key", "percent_up">;
    percent_down: {
        readonly label: "Decrease %";
        readonly describe: ([value]: [string, string]) => string;
        readonly icon: "condition/percent-down";
    } & Record<"key", "percent_down">;
};
type TSimpleOperationType = keyof typeof SimpleOperations;
export type TOperationType = keyof typeof Operations;
export declare function isSimpleOperationKey(key: string): key is TSimpleOperationType;
export type TOperation = {
    type: TOperationType;
    values: [number, number];
};
export declare function getOperationFromApi(operation: TApiOperation | undefined): TOperation | null;
export declare function isDuplexOperation(type: TOperationType): boolean;
export declare const isComparisonOperation: (operation: TOperationType) => boolean;
export declare function reduceOperationToApi({ type, values }: TOperation): TApiOperation;
export {};
