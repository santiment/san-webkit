import type { TAlertSchemaUnion } from '../categories/index.js';
import type { TApiAlert } from '../types.js';
export declare const useAlertFormCtx: (({ schema, apiAlert }: {
    schema: TAlertSchemaUnion;
    apiAlert?: null | TApiAlert;
}) => {
    schema: TAlertSchemaUnion & {
        suggestTitle: (_steps: {
            name: string;
            ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            reduceToApi: (apiAlert: {
                settings: object;
            }, state: any) => {
                settings: object;
            };
            state: {
                $$: {
                    [key: string]: unknown;
                };
            };
            isValid: {
                readonly $: boolean;
            };
        }[]) => Promise<string> | string;
        suggestDescription: (_steps: {
            name: string;
            ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            reduceToApi: (apiAlert: {
                settings: object;
            }, state: any) => {
                settings: object;
            };
            state: {
                $$: {
                    [key: string]: unknown;
                };
            };
            isValid: {
                readonly $: boolean;
            };
        }[]) => Promise<string> | string;
    };
    steps: {
        name: string;
        ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        reduceToApi: (apiAlert: {
            settings: object;
        }, state: any) => {
            settings: object;
        };
        state: {
            $$: {
                [key: string]: unknown;
            };
        };
        isValid: {
            readonly $: boolean;
        };
    }[];
    selectedStep: {
        readonly $: {
            name: string;
            ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            reduceToApi: (apiAlert: {
                settings: object;
            }, state: any) => {
                settings: object;
            };
            state: {
                $$: {
                    [key: string]: unknown;
                };
            };
            isValid: {
                readonly $: boolean;
            };
        };
        index$: number;
    };
    isAlertValid: {
        readonly $: boolean;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        schema: TAlertSchemaUnion & {
            suggestTitle: (_steps: {
                name: string;
                ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<any>;
                    Legend?: import("svelte").Component<any>;
                };
                reduceToApi: (apiAlert: {
                    settings: object;
                }, state: any) => {
                    settings: object;
                };
                state: {
                    $$: {
                        [key: string]: unknown;
                    };
                };
                isValid: {
                    readonly $: boolean;
                };
            }[]) => Promise<string> | string;
            suggestDescription: (_steps: {
                name: string;
                ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<any>;
                    Legend?: import("svelte").Component<any>;
                };
                reduceToApi: (apiAlert: {
                    settings: object;
                }, state: any) => {
                    settings: object;
                };
                state: {
                    $$: {
                        [key: string]: unknown;
                    };
                };
                isValid: {
                    readonly $: boolean;
                };
            }[]) => Promise<string> | string;
        };
        steps: {
            name: string;
            ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            reduceToApi: (apiAlert: {
                settings: object;
            }, state: any) => {
                settings: object;
            };
            state: {
                $$: {
                    [key: string]: unknown;
                };
            };
            isValid: {
                readonly $: boolean;
            };
        }[];
        selectedStep: {
            readonly $: {
                name: string;
                ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<any>;
                    Legend?: import("svelte").Component<any>;
                };
                reduceToApi: (apiAlert: {
                    settings: object;
                }, state: any) => {
                    settings: object;
                };
                state: {
                    $$: {
                        [key: string]: unknown;
                    };
                };
                isValid: {
                    readonly $: boolean;
                };
            };
            index$: number;
        };
        isAlertValid: {
            readonly $: boolean;
        };
    };
    set: ({ schema, apiAlert }: {
        schema: TAlertSchemaUnion;
        apiAlert?: null | TApiAlert;
    }) => {
        schema: TAlertSchemaUnion & {
            suggestTitle: (_steps: {
                name: string;
                ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<any>;
                    Legend?: import("svelte").Component<any>;
                };
                reduceToApi: (apiAlert: {
                    settings: object;
                }, state: any) => {
                    settings: object;
                };
                state: {
                    $$: {
                        [key: string]: unknown;
                    };
                };
                isValid: {
                    readonly $: boolean;
                };
            }[]) => Promise<string> | string;
            suggestDescription: (_steps: {
                name: string;
                ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<any>;
                    Legend?: import("svelte").Component<any>;
                };
                reduceToApi: (apiAlert: {
                    settings: object;
                }, state: any) => {
                    settings: object;
                };
                state: {
                    $$: {
                        [key: string]: unknown;
                    };
                };
                isValid: {
                    readonly $: boolean;
                };
            }[]) => Promise<string> | string;
        };
        steps: {
            name: string;
            ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            reduceToApi: (apiAlert: {
                settings: object;
            }, state: any) => {
                settings: object;
            };
            state: {
                $$: {
                    [key: string]: unknown;
                };
            };
            isValid: {
                readonly $: boolean;
            };
        }[];
        selectedStep: {
            readonly $: {
                name: string;
                ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<any>;
                    Legend?: import("svelte").Component<any>;
                };
                reduceToApi: (apiAlert: {
                    settings: object;
                }, state: any) => {
                    settings: object;
                };
                state: {
                    $$: {
                        [key: string]: unknown;
                    };
                };
                isValid: {
                    readonly $: boolean;
                };
            };
            index$: number;
        };
        isAlertValid: {
            readonly $: boolean;
        };
    };
};
