import type { TConditionsState } from './schema.js';
import { type TOperationType } from './operations.js';
export declare function getOperationSign(metric: string | null, operation: TOperationType): '' | '%' | '$';
export declare function describeConditions(metric: null | string, { operation, time }: TConditionsState): string;
