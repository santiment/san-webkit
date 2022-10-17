import { writable } from 'svelte/store'
import { Device, mapWidthToDevice, responsive$ } from '@/responsive'

const checkIsMobile = (device: Device) => device !== Device.Desktop

export const IsMobile = writable(checkIsMobile(mapWidthToDevice()))
responsive$.subscribe((device) => IsMobile.set(checkIsMobile(device)))

const checkIsMobileOnly = (device: Device) => device === Device.Phone || device === Device.PhoneXs

export const IsMobileOnly = writable(checkIsMobileOnly(mapWidthToDevice()))
responsive$.subscribe((device) => IsMobileOnly.set(checkIsMobileOnly(device)))
