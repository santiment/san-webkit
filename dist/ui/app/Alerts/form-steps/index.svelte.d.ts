import type { TApiAlert } from '../types.js';
import type { TStepBaseSchema, TStepSchema, TStepUI } from './types.js';
import type { IfAny } from '../../../../utils/types/index.js';
export declare function createAlertStep<GStepSchema extends TStepSchema>(apiAlert: undefined | null | Partial<TApiAlert>, schema: GStepSchema): TAlertStep<GStepSchema>;
export type TBaseState<GStepSchema extends TStepBaseSchema<string, any, any> = TStepBaseSchema<string, any, any>> = {
    get $$(): IfAny<ReturnType<GStepSchema['initState']>, unknown, ReturnType<GStepSchema['initState']>>;
    set $$(value: IfAny<ReturnType<GStepSchema['initState']>, unknown, ReturnType<GStepSchema['initState']>>);
};
export type TAlertStep<GStepSchema extends TStepBaseSchema<string, any, any> = TStepBaseSchema<string, any, any>> = {
    name: GStepSchema['name'];
    ui: TStepUI<{
        state: TBaseState<GStepSchema>;
    }>['ui'];
    reduceToApi: GStepSchema['reduceToApi'];
    state: TBaseState<GStepSchema>;
    isValid: {
        get $(): boolean;
    };
};
