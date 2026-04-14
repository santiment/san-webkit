import type { Coordinate, DataChangedScope, IChartApi, ISeriesApi, ISeriesPrimitive, PrimitiveHoveredItem, SeriesAttachedParameter, SeriesOptionsMap, Time } from '@santiment-network/chart-next';
import { type DrawingAxisView } from './axis-view.js';
import { type TData, type TOptions, type TPoint, type TViewPoint } from '../types.js';
import { DrawingPaneView, type DrawingAxisPaneView } from './pane-view.js';
export declare abstract class DrawingPrimitive<GDrawingType extends string> implements ISeriesPrimitive<Time> {
    abstract readonly __type: GDrawingType;
    protected abstract readonly _paneViews: DrawingPaneView[];
    protected _chart: IChartApi | undefined;
    protected _series: ISeriesApi<keyof SeriesOptionsMap> | undefined;
    protected _seriesId: string | undefined;
    protected _dataPoints: TPoint[];
    protected _viewPoints: TViewPoint[];
    protected _finalizedViewPoints: TViewPoint[];
    protected _options: TOptions;
    protected _timeAxisViews: DrawingAxisView[];
    protected _priceAxisViews: DrawingAxisView[];
    protected _priceAxisPaneViews: DrawingAxisPaneView[];
    protected _timeAxisPaneViews: DrawingAxisPaneView[];
    protected dataUpdated?(scope: DataChangedScope): void;
    protected requestUpdate(): void;
    private _requestUpdate?;
    constructor(data: TData, options?: Partial<TOptions>);
    protected mapDataPointsToViewPoints(): undefined | TViewPoint[];
    convertDataToViewPoints(): void;
    attached({ chart, series, requestUpdate }: SeriesAttachedParameter<Time>): void;
    detached(): void;
    /**
     * Completely removing primitive from a series
     */
    delete(): void;
    attachTo(series?: SeriesAttachedParameter<Time>['series'] | null, id?: string): void;
    get points(): TPoint[];
    get chart(): IChartApi;
    get series(): ISeriesApi<keyof SeriesOptionsMap>;
    get options(): TOptions;
    private _oldPriceRange;
    private _oldTimeCache;
    validatePoints(): void;
    updateAllViews(): void;
    priceAxisViews(): DrawingAxisView[];
    timeAxisViews(): DrawingAxisView[];
    paneViews(): DrawingPaneView[];
    priceAxisPaneViews(): DrawingAxisPaneView[];
    timeAxisPaneViews(): DrawingAxisPaneView[];
    applyOptions(options: Partial<TOptions>): void;
    private _fireDataUpdated;
    abstract updateEndPoint(p: TViewPoint): void;
    protected sortViewPoints?(): void;
    hitTest(x: Coordinate, y: Coordinate): PrimitiveHoveredItem | null;
    isHovered(): boolean;
    isSelected(): boolean;
    select(value: boolean): void;
    move(diffXY: [number, number], handleIndices?: [number, number]): void;
    get viewPoints(): TViewPoint[];
    get finalizedViewPoints(): TViewPoint[];
    protected mapViewPointsToDataPoints(): undefined | TPoint[];
    /**
     * Convert view points to data points
     * @returns
     */
    finalize(): void;
    get seriesId(): string | undefined;
    export(): {
        series: string | undefined;
        points: TPoint[];
    };
}
