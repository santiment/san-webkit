export declare const Mode: {
    readonly DRAG: 0;
    readonly SHIFT: 1;
    readonly ZOOM: 2;
};
export type TMode = (typeof Mode)[keyof typeof Mode];
export declare const ModeOptions: {
    0: {
        handleScroll: {
            mouseWheel: boolean;
            pressedMouseMove: boolean;
        };
        handleScale: {
            mouseWheel: boolean;
        };
    };
    1: {
        handleScroll: {
            mouseWheel: boolean;
            pressedMouseMove: boolean;
        };
        handleScale: {
            mouseWheel: boolean;
        };
    };
    2: {
        handleScroll: {
            mouseWheel: boolean;
            pressedMouseMove: boolean;
        };
        handleScale: {
            mouseWheel: boolean;
        };
    };
};
