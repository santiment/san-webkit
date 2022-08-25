export declare const isInvalidAddress: (address: string) => boolean
export declare const isValidAddress: (address: string) => boolean
export declare enum Infrastructure {
  ETH = 'ETH',
  BTC = 'BTC',
  XRP = 'XRP',
  LTC = 'LTC',
  BCH = 'BCH',
}
export declare function getAddressInfrastructure(address: string): Infrastructure | undefined
