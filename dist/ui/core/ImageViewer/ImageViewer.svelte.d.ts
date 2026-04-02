type TProps = {
    close: () => void;
    src: string;
    alt?: string;
};
declare const ImageViewer: import("svelte").Component<TProps, {
    handleDownload: () => Promise<void>;
}, "">;
type ImageViewer = ReturnType<typeof ImageViewer>;
export default ImageViewer;
