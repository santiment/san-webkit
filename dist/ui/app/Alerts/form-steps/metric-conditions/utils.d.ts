import type { TConditionsState } from './schema.js';
import { type TOperationType } from './operations.js';
export declare function getOperationSign(metric: string, operation: TOperationType): '' | '%' | '$';
export declare function describeConditions(metric: null | string, conditions: TConditionsState): string;
