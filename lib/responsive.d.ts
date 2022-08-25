export declare enum Device {
  Desktop = 'desktop',
  Tablet = 'tablet',
  Phone = 'phone',
  PhoneXs = 'phone-xs',
}
export declare function mapWidthToDevice(): Device
export declare function startResponsiveController(): void
declare type Unsubscriber = () => {}
export declare const responsive$: {
  subscribe(subscriber: (device: Device) => any): Unsubscriber
}
export {}
