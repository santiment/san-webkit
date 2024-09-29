/**
 *
 * @param {{release:string, org:string, project:string}} settings
 */
export function uploadSentrySourcemaps({ org, project, release }: {
    release: string;
    org: string;
    project: string;
}): Promise<void>;
