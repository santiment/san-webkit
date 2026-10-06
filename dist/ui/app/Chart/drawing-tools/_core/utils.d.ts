import type { Coordinate, ITimeScaleApi, Time } from '@santiment-network/chart-next';
export declare function convertCoordinateToSafeTime(x: number, timeScale: ITimeScaleApi<any>): Time;
export declare function convertTimeToSafeCoordinate(time: number, timeScale: ITimeScaleApi<any>): Coordinate;
