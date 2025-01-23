import { createCtx } from '../../../utils/index.js';
export const useScreenTransitionCtx = createCtx('useScreenTransitionCtx', (screens, defaultValue = screens[0]) => {
    const indices = new Map();
    screens.forEach((value, i) => indices.set(value, i));
    let screen = $state.raw(defaultValue);
    let index = $state(indices.get(screen));
    return {
        screens,
        screen: {
            get $() {
                return screen;
            },
            get index$() {
                return index;
            },
            set $(value) {
                index = indices.get(value);
                screen = value;
            },
        },
    };
});
