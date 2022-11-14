import { track } from '../index';
export function TrackCategory(category) {
    const data = (data) => (Object.assign(Object.assign({}, data), { category }));
    return (event, properties) => track.event(event, data(properties));
}
//# sourceMappingURL=utils.js.map