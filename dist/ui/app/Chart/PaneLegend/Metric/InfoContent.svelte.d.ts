import type { TSeries } from '../../ctx/series.svelte.js';
type TProps = {
    info: {
        description?: string;
        academyLinks: string[];
    } | null;
    metric: TSeries | null;
};
declare const InfoContent: import("svelte").Component<TProps, {
    replaceDescriptionMeta: (description: string, ticker: string) => string;
}, "">;
type InfoContent = ReturnType<typeof InfoContent>;
export default InfoContent;
