import { onMount } from 'svelte'

import { createCtx } from '$lib/utils/index.js'

export enum DeviceType {
  Desktop = 'desktop',
  Tablet = 'tablet',
  Phone = 'phone',
  PhoneXs = 'phone-xs',
}

const deviceValues = Object.values(DeviceType)

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

function mapWindowToDevice(): DeviceType {
  const { innerWidth } = window

  if (innerWidth < 480) return DeviceType.PhoneXs
  if (innerWidth < 768) return DeviceType.Phone
  if (innerWidth < 992) return DeviceType.Tablet

  return DeviceType.Desktop
}

export const useDeviceCtx = createCtx('useDeviceCtx', (initialDeviceType?: DeviceType) => {
  let deviceType = $state(initialDeviceType ?? DeviceType.Desktop)

  const device = $derived(getDeviceInfo(deviceType))

  $effect(() => {
    document.body.classList.add(deviceType)

    return () => document.body.classList.remove(...deviceValues)
  })

  const onResize = () => (deviceType = mapWindowToDevice())

  onMount(() => {
    onResize()
    window.addEventListener('resize', onResize, { passive: true })

    return () => window.removeEventListener('resize', onResize)
  })

  return {
    device: {
      get $() {
        return device
      },
    },
  }
})
