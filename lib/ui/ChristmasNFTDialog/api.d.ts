export declare const NFT_BATTLE_TAG = "NFTBATTLE";
export declare const queryCurrentUserInsights: () => Promise<{
    insights: {
        id: number;
        title: string;
        publishedAt: null | string;
        tags: {
            name: string;
        }[];
    }[];
    sanbaseNft: {
        hasValidNft: boolean;
        nftCount: number;
        nftData: {
            address: string;
            tokenIds: string;
        }[];
    };
} | null>;
export declare const queryUserNftInsights: () => Promise<any[]>;
export declare const checkIsGameStarted: () => boolean;
export declare const startGame: () => void;
export declare const checkWasNftDialogClosedOnce: () => boolean;
export declare const saveDialogClose: () => void;
