export declare function useImageViewer(): {
    viewer: {
        readonly $: {
            scale: number;
            position: {
                x: number;
                y: number;
            };
            isDragging: boolean;
            windowWidth: number;
            windowHeight: number;
            imageElement: HTMLImageElement | undefined;
        };
        readonly cursorStyle$: "default" | "grabbing" | "grab";
        zoom: (delta: number) => void;
        handlePointerDown: (event: PointerEvent) => void;
        handlePointerMove: (event: PointerEvent) => void;
        handlePointerUp: (event: PointerEvent) => void;
        handleResize: () => void;
    };
};
