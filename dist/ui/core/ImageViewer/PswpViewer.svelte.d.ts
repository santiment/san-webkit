type TProps = {
    src: string;
    alt?: string;
    width: number;
    height: number;
    el?: HTMLElement;
    pswp: typeof import('photoswipe');
    ondestroy: () => void;
};
declare const PswpViewer: import("svelte").Component<TProps, {}, "">;
type PswpViewer = ReturnType<typeof PswpViewer>;
export default PswpViewer;
