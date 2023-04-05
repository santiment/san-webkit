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
} | null>;
export declare const queryUserNftInsights: () => Promise<any[]>;
export declare const checkIsGameStarted: () => boolean;
export declare const startGame: () => void;
export declare const checkWasNftDialogClosedOnce: () => boolean;
export declare const saveDialogClose: () => void;
export type NftData = {
    address: string;
    nonValidTokenIds: number[];
}[];
export declare const queryNftToClaim: () => Promise<NftData>;
