import { onMount } from 'svelte';
import { BROWSER } from 'esm-env';
import { createCtx } from '../../utils/index.js';
import { applyStyles } from '../../ui/utils/index.js';
export const VIEWPORT_PRIORITY = {
    VISIBLE: 0,
    HALF_VISIBLE: 10,
    NOT_VISIBLE: 100,
};
export const useViewportPriorityCtx = createCtx('webkit_useIntersectionObserverCtx', () => {
    if (!BROWSER) {
        return;
    }
    const ObservedSettings = new Map();
    const observer = new IntersectionObserver((entries) => entries.forEach(entryObserver), {
        threshold: [0, 0.5],
    });
    onMount(() => () => observer.disconnect());
    function entryObserver(entry) {
        const observedData = ObservedSettings.get(entry.target);
        if (!observedData)
            return;
        const { settings } = observedData;
        window.clearTimeout(observedData.lazyTimer);
        if (!entry.isIntersecting) {
            // NOTE: Lazy timer helps to avoid multiple mount/unmounts, when user scrolls in/out on an item multiple times
            if (settings.priority < VIEWPORT_PRIORITY.NOT_VISIBLE) {
                observedData.lazyTimer = window.setTimeout(() => {
                    settings.priority = VIEWPORT_PRIORITY.NOT_VISIBLE;
                }, 10_000);
                return;
            }
            return (settings.priority = VIEWPORT_PRIORITY.NOT_VISIBLE);
        }
        if (entry.intersectionRatio < 0.5) {
            return (settings.priority = VIEWPORT_PRIORITY.HALF_VISIBLE);
        }
        settings.priority = VIEWPORT_PRIORITY.VISIBLE;
    }
    return { observer, ObservedSettings };
});
export function useItemViewportPriorityFlow() {
    return ((useViewportPriorityCtx.get() && useItemViewportPriorityCtx.set()) ||
        {});
}
export const useItemViewportPriorityCtx = createCtx('webkit_useItemViewportPriorityCtx', () => {
    const rootCtx = useViewportPriorityCtx.get();
    if (!rootCtx || !BROWSER)
        return;
    const { observer, ObservedSettings } = rootCtx;
    const settings = $state({
        priority: VIEWPORT_PRIORITY.NOT_VISIBLE,
    });
    const action = (node, margins = { top: '0px', bottom: '0px' }) => {
        const viewportAnchor = createViewportAnchor(node, margins);
        const observedData = { settings, lazyTimer: null };
        ObservedSettings.set(viewportAnchor, observedData);
        observer.observe(viewportAnchor);
        settings.priority = ('top' in margins
            ? getNodeClientRectVerticalViewportPriority
            : getNodeClientRectHorizontalViewportPriority)(viewportAnchor);
        return {
            destroy() {
                window.clearTimeout(observedData.lazyTimer);
                observer.unobserve(viewportAnchor);
                ObservedSettings.delete(viewportAnchor);
            },
        };
    };
    return {
        settings,
        viewportObserverAction: action,
        checkIsInViewport$() {
            return settings.priority < VIEWPORT_PRIORITY.NOT_VISIBLE;
        },
    };
});
/**
 * Viewport anchor allows to have rootMargins without providing custom `root` scroll element
 */
function createViewportAnchor(node, margins) {
    const div = document.createElement('div');
    const { top = '0', bottom = '0', left = '0', right = '0', } = margins;
    applyStyles(div, { position: 'absolute', zIndex: '-1', left, right, top, bottom });
    div.classList.add('viewport-anchor');
    node.appendChild(div);
    return div;
}
// NOTE: This is initial strict viewport check. After mount, intersection observer will be used to update priority based on provided margins.
function getNodeClientRectVerticalViewportPriority(node) {
    const viewportHeight = window.innerHeight;
    const { top, bottom } = node.getBoundingClientRect();
    // NOTE: Target's top is outside the viewport's bottom
    if (top > viewportHeight) {
        return VIEWPORT_PRIORITY.NOT_VISIBLE;
    }
    // NOTE: Target's bottom is outside the viewport's top
    if (bottom < 0) {
        return VIEWPORT_PRIORITY.NOT_VISIBLE;
    }
    if (top <= 0 && bottom >= viewportHeight) {
        return VIEWPORT_PRIORITY.VISIBLE;
    }
    if (top + 200 > 0 && bottom - 200 < viewportHeight) {
        return VIEWPORT_PRIORITY.VISIBLE;
    }
    return VIEWPORT_PRIORITY.HALF_VISIBLE;
}
function getNodeClientRectHorizontalViewportPriority(node) {
    const viewportWidth = window.innerWidth;
    const { left, right } = node.getBoundingClientRect();
    // NOTE: Target's left is outside the viewport's right
    if (left > viewportWidth) {
        return VIEWPORT_PRIORITY.NOT_VISIBLE;
    }
    // NOTE: Target's right is outside the viewport's left
    if (right < 0) {
        return VIEWPORT_PRIORITY.NOT_VISIBLE;
    }
    if (left <= 0 && right >= viewportWidth) {
        return VIEWPORT_PRIORITY.VISIBLE;
    }
    if (left + 200 > 0 && right - 200 < viewportWidth) {
        return VIEWPORT_PRIORITY.VISIBLE;
    }
    return VIEWPORT_PRIORITY.HALF_VISIBLE;
}
