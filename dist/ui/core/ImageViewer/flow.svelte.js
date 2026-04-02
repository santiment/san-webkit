const MIN_SCALE = 0.5;
const MAX_SCALE = 3;
const PINCH_SENSITIVITY = 0.005;
export function useImageViewer() {
    const state = $state({
        scale: 1,
        position: { x: 0, y: 0 },
        isDragging: false,
        windowWidth: 0,
        windowHeight: 0,
        imageElement: undefined,
    });
    let activePointers = [];
    let lastPinchDistance = -1;
    const isScrollable = $derived.by(() => {
        if (!state.imageElement)
            return false;
        const currentWidth = state.imageElement.width * state.scale;
        const currentHeight = state.imageElement.height * state.scale;
        return currentWidth > state.windowWidth || currentHeight > state.windowHeight;
    });
    const cursorStyle = $derived(state.isDragging ? 'grabbing' : isScrollable ? 'grab' : 'default');
    function calculateDistance(p1, p2) {
        const deltaX = p1.clientX - p2.clientX;
        const deltaY = p1.clientY - p2.clientY;
        return Math.hypot(deltaX, deltaY);
    }
    function clamp(value, limit) {
        return Math.max(-limit, Math.min(limit, value));
    }
    function updatePosition(targetX, targetY, targetScale) {
        if (!state.imageElement)
            return;
        const currentWidth = state.imageElement.width * targetScale;
        const currentHeight = state.imageElement.height * targetScale;
        const overflowX = (currentWidth - state.windowWidth) / 2;
        const overflowY = (currentHeight - state.windowHeight) / 2;
        state.position.x = overflowX > 0 ? clamp(targetX, overflowX) : 0;
        state.position.y = overflowY > 0 ? clamp(targetY, overflowY) : 0;
    }
    function zoom(delta) {
        const nextScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, state.scale + delta));
        state.scale = nextScale;
        updatePosition(state.position.x, state.position.y, nextScale);
    }
    function handlePointerDown(event) {
        activePointers.push(event);
        if (isScrollable || activePointers.length > 1) {
            state.isDragging = true;
        }
    }
    function handlePointerMove(event) {
        const index = activePointers.findIndex((p) => p.pointerId === event.pointerId);
        if (index !== -1) {
            activePointers[index] = event;
        }
        if (activePointers.length === 2) {
            const currentDistance = calculateDistance(activePointers[0], activePointers[1]);
            if (lastPinchDistance > 0) {
                const distanceDelta = currentDistance - lastPinchDistance;
                zoom(distanceDelta * PINCH_SENSITIVITY);
            }
            lastPinchDistance = currentDistance;
            return;
        }
        if (state.isDragging && activePointers.length === 1) {
            event.preventDefault();
            updatePosition(state.position.x + event.movementX, state.position.y + event.movementY, state.scale);
        }
    }
    function handlePointerUp(event) {
        activePointers = activePointers.filter((p) => p.pointerId !== event.pointerId);
        if (activePointers.length < 2) {
            lastPinchDistance = -1;
        }
        if (activePointers.length === 0) {
            state.isDragging = false;
        }
    }
    function handleResize() {
        updatePosition(state.position.x, state.position.y, state.scale);
    }
    return {
        viewer: {
            get $() {
                return state;
            },
            get cursorStyle$() {
                return cursorStyle;
            },
            zoom,
            handlePointerDown,
            handlePointerMove,
            handlePointerUp,
            handleResize,
        },
    };
}
