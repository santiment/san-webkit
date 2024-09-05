import { createCtx } from '$lib/utils/index.js'
import { BROWSER } from 'esm-env'
import { ss } from 'svelte-runes'

export enum DeviceType {
  Desktop = 'desktop',
  Tablet = 'tablet',
  Phone = 'phone',
  PhoneXs = 'phone-xs',
}

function getDeviceInfo(type: DeviceType) {
  const isMobile = type.includes(DeviceType.Phone) || type === DeviceType.Tablet
  return { type, isMobile, isDesktop: !isMobile }
}

const device = ss(getDeviceInfo(DeviceType.Desktop))

function onDeviceTypeChange(deviceType: DeviceType) {
  if (device.$.type === deviceType) return

  if (BROWSER) {
    document.body.classList.remove(device.$.type)
    document.body.classList.add(deviceType)
  }

  device.$ = getDeviceInfo(deviceType)
}

if (BROWSER) {
  function mapWindowToDevice(): DeviceType {
    const { innerWidth } = window

    if (innerWidth < 480) return DeviceType.PhoneXs
    if (innerWidth < 768) return DeviceType.Phone
    if (innerWidth < 992) return DeviceType.Tablet

    return DeviceType.Desktop
  }

  const onResize = () => onDeviceTypeChange(mapWindowToDevice())

  onResize()
  window.addEventListener('resize', onResize, { passive: true })
}

export const useDeviceCtx = createCtx('useDeviceCtx', (deviceType?: DeviceType) => {
  if (deviceType) onDeviceTypeChange(deviceType)

  return { device }
})
