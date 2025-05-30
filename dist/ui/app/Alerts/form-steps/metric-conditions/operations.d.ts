import { type TApiOperation } from '../../operations.js';
declare const SimpleOperations: {
    readonly above: {
        readonly label: "More than";
        readonly describe: ([value]: [string, string]) => string;
    } & Record<"key", "above">;
    readonly above_or_equal: {
        readonly label: "More than or equal";
        readonly describe: ([value]: [string, string]) => string;
    } & Record<"key", "above_or_equal">;
    readonly below: {
        readonly label: "Less than";
        readonly describe: ([value]: [string, string]) => string;
    } & Record<"key", "below">;
    readonly below_or_equal: {
        readonly label: "Less than or equal";
        readonly describe: ([value]: [string, string]) => string;
    } & Record<"key", "below_or_equal">;
    readonly inside_channel: {
        readonly label: "Entering channel";
        readonly describe: ([left, right]: [string, string]) => string;
    } & Record<"key", "inside_channel">;
    readonly outside_channel: {
        readonly label: "Outside channel";
        readonly describe: ([left, right]: [string, string]) => string;
    } & Record<"key", "outside_channel">;
    readonly percent_up: {
        readonly label: "Moving up %";
        readonly describe: ([value]: [string, string]) => string;
    } & Record<"key", "percent_up">;
    readonly percent_down: {
        readonly label: "Moving down %";
        readonly describe: ([value]: [string, string]) => string;
    } & Record<"key", "percent_down">;
};
export declare const Operations: {
    percent_up_or_down: {
        readonly label: "Moving up or down %";
        readonly describe: ([left, right]: [string, string]) => string;
    } & Record<"key", "percent_up_or_down">;
    above: {
        readonly label: "More than";
        readonly describe: ([value]: [string, string]) => string;
    } & Record<"key", "above">;
    above_or_equal: {
        readonly label: "More than or equal";
        readonly describe: ([value]: [string, string]) => string;
    } & Record<"key", "above_or_equal">;
    below: {
        readonly label: "Less than";
        readonly describe: ([value]: [string, string]) => string;
    } & Record<"key", "below">;
    below_or_equal: {
        readonly label: "Less than or equal";
        readonly describe: ([value]: [string, string]) => string;
    } & Record<"key", "below_or_equal">;
    inside_channel: {
        readonly label: "Entering channel";
        readonly describe: ([left, right]: [string, string]) => string;
    } & Record<"key", "inside_channel">;
    outside_channel: {
        readonly label: "Outside channel";
        readonly describe: ([left, right]: [string, string]) => string;
    } & Record<"key", "outside_channel">;
    percent_up: {
        readonly label: "Moving up %";
        readonly describe: ([value]: [string, string]) => string;
    } & Record<"key", "percent_up">;
    percent_down: {
        readonly label: "Moving down %";
        readonly describe: ([value]: [string, string]) => string;
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
export declare function reduceOperationToApi({ type, values }: TOperation): TApiOperation;
export {};
