import type { HTMLCanvasAttributes } from 'svelte/elements';
type TProps = {
    onpointerdown: HTMLCanvasAttributes['onpointerdown'];
};
declare const Canvas: import("svelte").Component<TProps, {}, "">;
type Canvas = ReturnType<typeof Canvas>;
export default Canvas;
