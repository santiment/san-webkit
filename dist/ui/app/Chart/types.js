export const Mode = {
    DRAG: 0,
    SHIFT: 1,
    ZOOM: 2,
    NON_INTERACTIVE: 10,
};
export const ModeOptions = {
    [Mode.DRAG]: {
        handleScroll: { mouseWheel: false, pressedMouseMove: true },
        handleScale: { mouseWheel: false },
    },
    [Mode.SHIFT]: {
        handleScroll: { mouseWheel: true, pressedMouseMove: false },
        handleScale: { mouseWheel: true },
    },
    [Mode.ZOOM]: {
        handleScroll: { mouseWheel: false, pressedMouseMove: false },
        handleScale: { mouseWheel: true },
    },
    [Mode.NON_INTERACTIVE]: {
        handleScroll: false,
        handleScale: false,
    },
};
