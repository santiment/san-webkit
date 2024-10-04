import { getConfig } from './config.js';
export async function signMessage(message) {
    const config = await getConfig();
    const { signMessage: wagmiSignMessage } = await import('@wagmi/core');
    const messageHash = (await import('viem')).hashMessage(message);
    const signature = await wagmiSignMessage(config, { message });
    return { messageHash, signature };
}
export async function getAccount() {
    const config = await getConfig();
    const { getAccount } = await import('@wagmi/core');
    return getAccount(config);
}
export async function connectAccounts() {
    const config = await getConfig();
    const { connect, injected } = await import('@wagmi/core');
    return connect(config, { connector: injected() });
}
