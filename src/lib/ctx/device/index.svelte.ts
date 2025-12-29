import { BROWSER } from 'esm-env'
import { untrack } from 'svelte'
import { ss } from 'svelte-runes'

import { createCtx } from '$lib/utils/index.js'

export enum DeviceType {
  Desktop = 'desktop',
  Tablet = 'tablet',
  Phone = 'phone',
  PhoneXs = 'phone-xs',
}

export type DeviceInfo = ReturnType<typeof getDeviceInfo>

export function getDeviceInfo(type: DeviceType) {
  const isPhone = type.includes(DeviceType.Phone)
  const isMobile = isPhone || type === DeviceType.Tablet

  return { type, isMobile, isPhone, isDesktop: !isMobile }
}

export function normalizeDeviceType(type: string | undefined): DeviceType {
  switch (type) {
    case 'mobile':
      return DeviceType.Phone
    case 'tablet':
      return DeviceType.Tablet
    default:
      return DeviceType.Desktop
  }
}

const device = ss(getDeviceInfo(DeviceType.Desktop))

function onDeviceTypeChange(deviceType: DeviceType) {
  untrack(() => {
    if (device.$.type === deviceType) return

    if (BROWSER) {
      document.body.classList.remove(device.$.type)
      document.body.classList.add(deviceType)
    }

    device.$ = getDeviceInfo(deviceType)
  })
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
