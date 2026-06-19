/**
 *
 * @param {{release:string, org:string, project:string, url?:string, serverPath?:string, flags?:{client?: string, server?: string}}} settings
 */
export function uploadSentrySourcemaps({ org, project, release, url, serverPath, flags, }: {
    release: string;
    org: string;
    project: string;
    url?: string;
    serverPath?: string;
    flags?: {
        client?: string;
        server?: string;
    };
}): Promise<void>;
