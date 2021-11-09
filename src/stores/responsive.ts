import { writable } from 'svelte/store'
import { Device, mapWidthToDevice, responsive$ } from '../responsive'

const checkIsMobile = (device: Device) => device !== Device.Desktop

export const IsMobile = writable(checkIsMobile(mapWidthToDevice()))
responsive$.subscribe((device) => IsMobile.set(checkIsMobile(device)))
