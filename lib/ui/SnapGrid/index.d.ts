import type { Handlers, Margin, SnapGridController, SnapItem } from './types';
import './snap-grid.css';
export declare function getAbsolutePosition([left, top]: SnapItem, settings: SnapGridController): number[];
type Settings = {
    cols: number;
    rowSize: number;
    gridWidth?: number;
    margin?: Margin;
    maxCols?: number;
    minCols?: number;
    maxRows?: number;
    minRows?: number;
};
export declare function SnapGrid(layout: SnapItem[], settings: Settings, handlers: Handlers): SnapGridController;
export {};
