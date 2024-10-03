/**
 *
 * @param {{release:string, org:string, project:string, url?:string, flags?:{client?: string, server?: string}}} settings
 */
export function uploadSentrySourcemaps({ org, project, release, url, flags }: {
    release: string;
    org: string;
    project: string;
    url?: string;
    flags?: {
        client?: string;
        server?: string;
    };
}): Promise<void>;
