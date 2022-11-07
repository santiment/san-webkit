import { writable } from 'svelte/store'
import { Device, mapWidthToDevice, responsive$ } from '@/responsive'

const checkIsMobile = (device: Device) => device !== Device.Desktop

export const IsMobile = writable(checkIsMobile(mapWidthToDevice()))

const checkIsPhone = (device: Device) => [Device.Phone, Device.PhoneXs].includes(device)
export const IsPhone = writable(checkIsPhone(mapWidthToDevice()))

responsive$.subscribe((device) => {
  IsMobile.set(checkIsMobile(device))
  IsPhone.set(checkIsPhone(device))
})
