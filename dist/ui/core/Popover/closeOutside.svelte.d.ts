type TCloseOutsideProps = {
    getIsOpened: () => boolean;
    close: () => void;
    enabled?: boolean;
};
export declare const useCloseOnOutsideClick: ({ getIsOpened, close, enabled, }: TCloseOutsideProps) => {
    triggerEl: {
        $: HTMLElement | null;
    };
    contentEl: {
        $: HTMLElement | null;
    };
};
export {};
