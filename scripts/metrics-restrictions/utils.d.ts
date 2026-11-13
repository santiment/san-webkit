/**
 * @typedef {{
  name: string
  minInterval: string
  restrictedFrom: null | string
  restrictedTo: null | string
  docs: { description?: string; links: string }
  availableVersions: string[]
}} _TMetricRestrictions
 */
/**
 *
 * @param {{getAccessRestrictions: {
 * n: string
 * mi: string
 * rf: null | string
 * rt: null | string
 * d: { l: string }[]
 * av?: { v: string }[]
 * }[]}} gql - GQL data response
 *
 * @returns {Record<string, undefined | {
 * minInterval: string,
 * restrictedFrom: null | string,
 * restrictedTo: null | string,
 * docs: {
 *  description?: string
 *  academyLinks: string[]
 * },
 * availableVersions: string[]
 * }>}
 */
export function mapAccessRestrictionsData(gql: {
    getAccessRestrictions: {
        n: string;
        mi: string;
        rf: null | string;
        rt: null | string;
        d: {
            l: string;
        }[];
        av?: {
            v: string;
        }[];
    }[];
}): Record<string, undefined | {
    minInterval: string;
    restrictedFrom: null | string;
    restrictedTo: null | string;
    docs: {
        description?: string;
        academyLinks: string[];
    };
    availableVersions: string[];
}>;
export type _TMetricRestrictions = {
    name: string;
    minInterval: string;
    restrictedFrom: null | string;
    restrictedTo: null | string;
    docs: {
        description?: string;
        links: string;
    };
    availableVersions: string[];
};
