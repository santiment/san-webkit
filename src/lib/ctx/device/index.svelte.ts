import { BROWSER } from 'esm-env'
import { onMount } from 'svelte'

import { createCtx } from '$lib/utils/index.js'

export enum DeviceType {
  Desktop = 'desktop',
  Tablet = 'tablet',
  Phone = 'phone',
  PhoneXs = 'phone-xs',
}

function getDeviceInfo(type: DeviceType) {
  const isPhone = type.includes(DeviceType.Phone)
  const isMobile = isPhone || type === DeviceType.Tablet

  return { type, isMobile, isPhone, isDesktop: !isMobile }
}

function mapWindowToDevice(): DeviceType {
  const { innerWidth } = window

  if (innerWidth < 480) return DeviceType.PhoneXs
  if (innerWidth < 768) return DeviceType.Phone
  if (innerWidth < 992) return DeviceType.Tablet

  return DeviceType.Desktop
}

export const useDeviceCtx = createCtx('useDeviceCtx', (deviceType?: DeviceType) => {
  let device = $state(getDeviceInfo(deviceType ?? DeviceType.Desktop))

  function onDeviceTypeChange(deviceType: DeviceType) {
    if (device.type === deviceType) return

    if (BROWSER) {
      document.body.classList.remove(device.type)
      document.body.classList.add(deviceType)
    }

    device = getDeviceInfo(deviceType)
  }

  const onResize = () => onDeviceTypeChange(mapWindowToDevice())

  onMount(() => {
    window.addEventListener('resize', onResize, { passive: true })
    onResize()

    return window.removeEventListener('resize', onResize)
  })

  return {
    device: {
      get $() {
        return device
      },
    },
  }
})
