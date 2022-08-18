export declare type Position = 'top' | 'right' | 'bottom' | 'left';
export declare type Align = 'start' | 'center' | 'end';
declare type Offset = {
    left: number;
    top: number;
};
export declare function getHorizontalCorrection(tooltipWidth: number, left: number): number;
export declare function calculateAlignment(triggerWidthOrHeight: number, tooltipWidthOrHeight: number, align: Align): number;
export declare function getTooltipStyles(tooltip: HTMLElement, trigger: HTMLElement, position: Position, align: Align, offsetX?: number, offsetY?: number): Offset;
export {};
