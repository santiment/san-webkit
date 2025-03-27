import type { TStepSchema } from '../form-steps/types.js';
import type { TApiAlert } from '../types.js';
export type TAlertBaseSchema<GName, GProps extends {
    steps: TStepSchema[];
    deduceApiAlert: (apiAlert: TApiAlert) => boolean;
}> = {
    name: GName;
    ui: {
        label: string;
        description: string;
        icon: string;
    };
    steps: GProps['steps'];
    deduceApiAlert: GProps['deduceApiAlert'];
};
export declare function createAlertSchema<GBaseSchema extends TAlertBaseSchema<string, any> = any>(base: GBaseSchema): {
    readonly name: GBaseSchema["name"];
    readonly ui: GBaseSchema["ui"];
    readonly steps: readonly [...GBaseSchema["steps"], {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert) => {
            channel: string[];
            isPublic: boolean;
        };
        readonly validate: (state: {
            channel: string[];
            isPublic: boolean;
        }) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: {
            channel: string[];
            isPublic: boolean;
        }) => {
            settings: object;
        };
    }, {
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => {
            title: string;
            description: string;
        };
        readonly validate: (state: {
            title: string;
            description: string;
        }) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: {
            title: string;
            description: string;
        }) => {
            settings: object;
        };
    }];
    readonly deduceApiAlert: GBaseSchema["deduceApiAlert"];
};
