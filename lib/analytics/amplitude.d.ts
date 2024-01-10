export declare function initAmplitude({ id, scriptSrc, serverUrl, }?: {
    id?: string | undefined;
    scriptSrc?: string | undefined;
    serverUrl?: string | undefined;
}): void;
export declare function setAmplitudeUserProperties(props: Record<string, any>): any;
export declare function updateAmplitude(user_id?: number, name?: string | null, email?: string | null): void;
