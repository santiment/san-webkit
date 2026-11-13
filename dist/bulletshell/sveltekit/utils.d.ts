import type { RequestEvent } from '@sveltejs/kit';
export declare const STATUS: {
    readonly OK: 200;
    readonly NO_CONTENT: 204;
    readonly BAD_REQUEST: 400;
};
export declare const HEADERS: {
    FORCE_UPDATE: string;
};
export type TBulletshellManager = ReturnType<typeof Bulletshell>;
export declare function Bulletshell(event: RequestEvent): {
    isValidRoute(): boolean;
    doesShellFileExist(): boolean;
    getShellFilepath(): string;
    sendRenderRequest(): Promise<void | Response>;
    isShellWriteLocked(): boolean;
    lockShellWrite(): () => void;
    writeShellFiles(pageResponse: Response): Promise<void | [void, void]>;
    __allowServe(): boolean;
};
export declare function getBulletshellFileHeaders(filepath: string): Record<string, string | number>;
