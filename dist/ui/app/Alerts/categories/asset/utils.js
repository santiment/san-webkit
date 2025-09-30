export const getAssetTargetTitle = ({ slugs, namesMap }) => slugs.map((slug) => namesMap.get(slug) ?? '').join(', ');
export function mapSlugNames(slugs, assetGetter) {
    const map = new Map();
    for (const slug of slugs) {
        const { name } = assetGetter(slug) ?? {};
        if (name) {
            map.set(slug, name);
        }
    }
    return map;
}
