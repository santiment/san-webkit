import type { Snippet } from 'svelte';
type TProps = {
    children: Snippet<[{
        mountAction: (node: HTMLElement) => {
            destroy: () => void;
        };
    }]>;
};
declare const ImageViewer: import("svelte").Component<TProps, {}, "">;
type ImageViewer = ReturnType<typeof ImageViewer>;
export default ImageViewer;
