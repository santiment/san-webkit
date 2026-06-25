export type TTourStep = {
    element: string | Element;
    title?: string;
    description?: string;
    side?: 'top' | 'right' | 'bottom' | 'left' | 'over';
};
export declare const runTour: (steps: TTourStep[]) => void;
