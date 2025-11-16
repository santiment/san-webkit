import { type Snippet } from 'svelte';
type TProps = {
    children: Snippet;
};
declare const InfoPopover: import("svelte").Component<TProps, {
    replaceDescriptionMeta: (description: string, ticker: string) => string;
}, "">;
type InfoPopover = ReturnType<typeof InfoPopover>;
export default InfoPopover;
