import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'
import { Device, mapWidthToDevice, responsive$, phoneDevices } from '@/responsive'
// import { setSessionValue } from './utils'

const checkIsMobile = (device: Device) => device !== Device.Desktop
export const IsMobile = writable(checkIsMobile(mapWidthToDevice()))

const checkIsPhone = (device: Device) => phoneDevices.has(device)
export const IsPhone = writable(checkIsPhone(mapWidthToDevice()))

responsive$.subscribe((device) => {
  IsMobile.set(checkIsMobile(device))
  IsPhone.set(checkIsPhone(device))
})

export type DeviceInfoType = ReturnType<typeof getDeviceInfo>

export function getDeviceInfo(type: Device) {
  const isMobile = type.includes(Device.Phone) || type === Device.Tablet
  return { type, isMobile, isDesktop: !isMobile }
}

const CTX = 'Device$$'
export function Device$$(device: DeviceInfoType) {
  const store = writable(device)

  if (process.browser) {
    document.body.classList.add(device.type)
  }

  return setContext(CTX, {
    device$: {
      ...store,
      /** Add as <svelte:window on:resize={device$.onResize} /> */
      onResize() {
        const deviceType = mapWidthToDevice()
        if (deviceType === device.type) return

        document.body.classList.remove(device.type)
        document.body.classList.add(deviceType)

        // setSessionValue({ device })
        store.set(Object.assign(device, getDeviceInfo(deviceType)))
      },
    },
  })
}

export const getDevice$Ctx = () => getContext<ReturnType<typeof Device$$>>(CTX)
