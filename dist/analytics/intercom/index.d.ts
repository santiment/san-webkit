export type TIntercomSettings = Record<string, unknown> & {
    user_id?: number;
    name?: string | null;
    email?: string | null;
};
export declare function bootIntercom(app_id: string, settings?: TIntercomSettings): void;
export declare function updateIntercom(settings: TIntercomSettings): void;
