export async function getWeb3Provider() {
  if (!window.ethereum) return Promise.reject()
  if (window.provider) return window.provider
  // @ts-ignore
  const { ethers } = await import('ethers')
  return (window.provider = new ethers.providers.Web3Provider(window.ethereum))
}
export async function signMessage(message) {
  // @ts-ignore
  const { ethers } = await import('ethers')
  const provider = await getWeb3Provider()
  const messageHash = ethers.utils.hashMessage(message)
  const signature = await provider.getSigner().signMessage(message)
  return { signature, messageHash }
}
//# sourceMappingURL=index.js.map
