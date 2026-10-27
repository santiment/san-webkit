type TCountdownProps = {
    deadline?: Date;
    durationSec?: number;
};
export declare function useCountdown(props: TCountdownProps): {
    secondsLeft: {
        readonly $: number;
    };
    reset: (props: TCountdownProps) => void;
};
export {};
