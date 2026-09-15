import { type TBulletshellManager } from './utils.js';
export declare function serve(request: Request, bulletshell: TBulletshellManager, opts?: {
    etag: boolean;
    brotli: boolean;
    gzip: boolean;
    maxAge: null;
    immutable: boolean;
}): Response;
