export type TTourState = {
    id: string;
    recent: undefined | string;
    completed: Set<string>;
};
export declare function getSavedTourState(id: string): TTourState;
export declare function saveTourState(state: TTourState): void;
export declare function checkWasTourViewed(id: string): boolean;
