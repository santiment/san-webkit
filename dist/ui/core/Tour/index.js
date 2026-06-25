import { mount, unmount } from 'svelte';
import Step from './Step.svelte';
let activeDriver;
export const runTour = (steps) => {
    void startTour(steps);
};
async function startTour(steps) {
    activeDriver?.destroy();
    await import('driver.js/dist/driver.css');
    const { driver } = await import('driver.js');
    let stepInstance;
    activeDriver = driver({
        steps: steps.map(({ element, title, description, side }) => ({
            element,
            popover: { title, description, side },
        })),
        onPopoverRender: (popover, { driver }) => {
            if (stepInstance)
                unmount(stepInstance);
            popover.wrapper.innerHTML = '';
            stepInstance = mount(Step, {
                target: popover.wrapper,
                props: { driver },
            });
        },
        onDestroyed: () => {
            if (stepInstance)
                unmount(stepInstance);
            activeDriver = undefined;
        },
    });
    activeDriver.drive();
}
