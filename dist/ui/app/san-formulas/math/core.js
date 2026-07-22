// use light-weight, number-only implementations of functions
import { create, parserDependencies } from 'mathjs/number';
//const math = create(all)
export const math = create({ parserDependencies });
// create a new data type
export class Timeseries {
    values;
    timestamps;
    selector;
    // TODO: Refactor...
    constructor(...args) {
        //const [data, timestamps = new Array(data.length)] = args
        const [data, selectorOrTimestamps] = args;
        const isMetricData = typeof data[0] !== 'number';
        const values = (isMetricData ? new Array(data.length) : data);
        const timestamps = (isMetricData ? new Array(data.length) : selectorOrTimestamps);
        if (isMetricData) {
            const isOHLC = Number.isFinite(data[0]?.open);
            if (isOHLC) {
                values.open = new Array(data.length);
                values.high = new Array(data.length);
                values.low = new Array(data.length);
                values.close = new Array(data.length);
            }
            for (let i = 0; i < data.length; i++) {
                // @ts-expect-error
                const { value, time, open, high, low, close } = data[i];
                values[i] = value;
                timestamps[i] = time;
                if (isOHLC) {
                    values.open[i] = open;
                    values.high[i] = high;
                    values.low[i] = low;
                    values.close[i] = close;
                }
            }
        }
        this.values = values;
        this.timestamps = timestamps;
        this.selector = isMetricData
            ? selectorOrTimestamps
            : null;
    }
    toMetricData() {
        return this.timestamps.map((time, i) => ({
            time,
            value: this.values[i],
        }));
    }
}
// @ts-ignore
math.typed.addType({
    name: 'Timeseries',
    test: (input) => input instanceof Timeseries,
});
