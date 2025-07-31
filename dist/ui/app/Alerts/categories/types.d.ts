import type { TStepSchema } from '../form-steps/types.js';
import type { TApiAlert } from '../types.js';
import type { TAlertStep } from '../form-steps/index.svelte.js';
import type { IfAny } from '../../../../utils/types/index.js';
import { STEP_NAME_DESCRIPTION_SCHEMA } from '../form-steps/name-description/schema.js';
import { STEP_NOTIFICATIONS_PRIVACY_SCHEMA } from '../form-steps/notifications-privacy/schema.js';
type TSchemaStepToAlertStep<GTuple extends [...any[]]> = IfAny<GTuple, any, {
    [Index in keyof GTuple]: TAlertStep<GTuple[Index]>;
} & {
    length: GTuple['length'];
}>;
type TGenericSteps<GSteps extends TStepSchema[]> = IfAny<GSteps, any, [
    ...GSteps,
    typeof STEP_NOTIFICATIONS_PRIVACY_SCHEMA,
    typeof STEP_NAME_DESCRIPTION_SCHEMA
]>;
export type TAlertBaseSchema<GName, GProps extends {
    steps: TStepSchema[];
    deduceApiAlert: (apiAlert: Partial<TApiAlert>) => boolean;
}> = {
    name: GName;
    ui: {
        label: string;
        description: string;
        icon: string;
    };
    steps: GProps['steps'];
    deduceApiAlert: GProps['deduceApiAlert'];
    suggestTitle: (steps: TSchemaStepToAlertStep<TGenericSteps<GProps['steps']>>) => Promise<string> | string;
    suggestDescription: (steps: TSchemaStepToAlertStep<TGenericSteps<GProps['steps']>>) => Promise<string> | string;
};
export declare function createAlertSchema<GBaseSchema extends TAlertBaseSchema<string, any> = any>(base: GBaseSchema): {
    readonly name: GBaseSchema["name"];
    readonly ui: GBaseSchema["ui"];
    readonly steps: readonly [...GBaseSchema["steps"], {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }, {
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
            settings: object;
        };
    }];
    readonly deduceApiAlert: GBaseSchema["deduceApiAlert"];
    readonly suggestTitle: GBaseSchema["suggestTitle"];
    readonly suggestDescription: GBaseSchema["suggestDescription"];
};
export {};
