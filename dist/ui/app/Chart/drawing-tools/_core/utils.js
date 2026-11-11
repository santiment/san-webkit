// NOTE: Manual conversion is required to ensure that coordinates, which are outside of the logical range, are converted to correct timestamps. Otherwise it will result in `null` and errors.
export function convertCoordinateToSafeTime(x, timeScale) {
    // @ts-ignore
    const timeScaleModel = timeScale._timeScale;
    const startTime = timeScaleModel._points[0]?.originalTime;
    if (!startTime)
        return 0;
    const index = Math.ceil(timeScaleModel._coordinateToFloatIndex(x));
    let timeStep = null;
    timeScaleModel._points.some((item, index, array) => {
        timeStep = array[index + 1]?.originalTime - item.originalTime;
        return Number.isFinite(timeStep);
    });
    if (!timeStep)
        return startTime;
    return (startTime + timeStep * index);
}
// NOTE: Manual conversion is required to ensure that timestamps, which are outside of the logical range, are converted to correct coordinates. Otherwise a drawing will be cutoff
export function convertTimeToSafeCoordinate(time, timeScale) {
    // @ts-ignore
    const timeScaleModel = timeScale._timeScale;
    const startTime = timeScaleModel._points[0]?.originalTime;
    const startCoord = timeScale.timeToCoordinate(startTime, true);
    if (!startTime || !startCoord)
        return 0;
    let timeStep = null;
    timeScaleModel._points.some((item, index, array) => {
        timeStep = array[index + 1]?.originalTime - item.originalTime;
        return Number.isFinite(timeStep);
    });
    if (!timeStep)
        return 0;
    return (((time - startTime) / timeStep) * timeScaleModel._barSpacing + startCoord);
}
