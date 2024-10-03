/**
 *
 * @param {{release:string, org:string, project:string, url?:string}} settings
 */
export function uploadSentrySourcemaps({ org, project, release, url }: {
    release: string;
    org: string;
    project: string;
    url?: string;
}): Promise<void>;
