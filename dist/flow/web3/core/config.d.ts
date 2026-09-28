import type { AppKit } from '@reown/appkit';
import type { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import type { Config } from '@wagmi/core';
export declare const PROJECT_ID = "61efcea38c6e25725936f4f4217cf46b";
export declare const getConfig: () => Promise<Config>;
export declare const getWagmiAdapter: () => Promise<WagmiAdapter | null>;
export declare const getAppKit: () => Promise<AppKit | null>;
