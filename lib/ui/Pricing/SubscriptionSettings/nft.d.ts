export declare enum NftErrors {
    NoAddress = "The user does not have any blockchain addresses connected",
    ActiveSubscription = "The user already has an active Sanbase subscription",
    NoNft = "The user is not eligible for the SanR NFT subscription. None of user addresses has a valid SanR NFT token."
}
export declare function startCheckNftAccessFlow(customer$: SAN.CustomerStore): Promise<void>;
