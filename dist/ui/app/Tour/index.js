import { mount, unmount } from 'svelte';
import Step from './Step.svelte';
import { checkWasTourViewed, getSavedTourState, saveTourState } from './storage.js';
let activeDriver;
export const Tour = {
    activeId: undefined,
    async start(id, steps, config = {}) {
        if (Tour.activeId === id)
            return;
        Tour.stop();
        const driver = await importDriver();
        const tourState = getSavedTourState(id);
        const { initialStep = 0, onDestroy, onNextStep } = config;
        let stepInstance;
        activeDriver = driver({
            allowClose: false,
            smoothScroll: true,
            steps: steps.map(({ element, id, content, ...popover }) => ({
                element,
                popover,
                data: { id, content },
            })),
            onPopoverRender(popover, { driver }) {
                if (stepInstance)
                    unmount(stepInstance);
                popover.wrapper.innerHTML = '';
                stepInstance = mount(Step, {
                    target: popover.wrapper,
                    props: { type: id, driver, tourState, config },
                });
            },
            onDestroyed() {
                if (stepInstance)
                    unmount(stepInstance);
                saveTourState(tourState);
                onDestroy?.();
                Tour.activeId = undefined;
            },
        });
        Tour.activeId = id;
        onNextStep?.(steps[initialStep].id);
        activeDriver.drive(initialStep);
    },
    stop() {
        activeDriver?.destroy();
    },
    checkWasTourViewed,
};
let createDriver;
async function importDriver() {
    return createDriver
        ? Promise.resolve(createDriver)
        : Promise.all([import('driver.js'), import('driver.js/dist/driver.css')]).then(([{ driver }]) => (createDriver = driver));
}
