import type { SnapGridController, SnapItem } from './types';
export declare const getTranslate: (x: number, y: number) => string;
export declare function styleTransform(left: number, top: number, settings: SnapGridController): string;
export declare function translateLayoutItem(node: HTMLElement, item: SnapItem, settings: any): void;
export declare function getResponsiveTranslate([left, top, width]: SnapItem, settings: SnapGridController): string;
export declare function setResponsiveTranslate(item: SnapItem, settings: any): void;
export declare function getWidth(item: SnapItem, settings: SnapGridController): string;
export declare function calcY(row: number, settings: SnapGridController, hasOutsideMargin?: boolean): number;
export declare const calcHeight: (row: number, settings: SnapGridController) => number;
