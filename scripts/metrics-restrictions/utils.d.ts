/**
 * @typedef {{
  name: string
  minInterval: string
  restrictedFrom: null | string
  restrictedTo: null | string
  docs: { links: string }
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
 * }[]}} gql - GQL data response
 *
 * @returns {Record<string, undefined | _TMetricRestrictions>}
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
    }[];
}): Record<string, undefined | _TMetricRestrictions>;
export type _TMetricRestrictions = {
    name: string;
    minInterval: string;
    restrictedFrom: null | string;
    restrictedTo: null | string;
    docs: {
        links: string;
    };
};
