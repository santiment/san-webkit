import { mutateAddUserEthAddress } from './../../api/web3';
export async function getWeb3Provider() {
    if (!window.ethereum)
        return Promise.reject();
    if (window.provider)
        return window.provider;
    // @ts-ignore
    const { ethers } = await import('ethers');
    return (window.provider = new ethers.providers.Web3Provider(window.ethereum));
}
export async function signMessage(message) {
    // @ts-ignore
    const { ethers } = await import('ethers');
    const provider = await getWeb3Provider();
    const messageHash = ethers.utils.hashMessage(message);
    const signature = await provider.getSigner().signMessage(message);
    return { signature, messageHash };
}
const handleAccountsChanged = (accounts) => accounts.length ? [accounts[0]] : [null, 'Please connect to MetaMask.'];
export function getAccount() {
    return window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleAccountsChanged)
        .catch((e) => [null, e]);
}
export async function connectWallet() {
    if (!window.ethereum)
        return Promise.reject('No metamask found');
    const [address, error] = await getAccount();
    if (error)
        return Promise.reject(error);
    const { signature, messageHash } = await signMessage(address);
    return mutateAddUserEthAddress(address, signature, messageHash);
}
//# sourceMappingURL=index.js.map