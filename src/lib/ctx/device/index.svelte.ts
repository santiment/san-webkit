import { onMount } from 'svelte'

import { createCtx } from '$lib/utils/index.js'

const BREAKPOINTS = Object.freeze({
  lg: '1279px',
  md: '992px',
  sm: '768px',
  xs: '480px',
})

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

type DeviceMediaQuery = {
  device: DeviceType
  media: Pick<MediaQueryList, 'matches'>
}

type DeviceBreakpoint = {
  breakpoint: keyof typeof BREAKPOINTS
  device: DeviceType
}

const DEVICE_BREAKPOINTS: DeviceBreakpoint[] = [
  { breakpoint: 'xs', device: DeviceType.PhoneXs },
  { breakpoint: 'sm', device: DeviceType.Phone },
  { breakpoint: 'md', device: DeviceType.Tablet },
]

const getViewportDeviceType = (queries: DeviceMediaQuery[]) =>
  queries.find(({ media }) => media.matches)?.device ?? DeviceType.Desktop

export const useDeviceCtx = createCtx('useDeviceCtx', (initialDeviceType?: DeviceType) => {
  let deviceType = $state(initialDeviceType ?? DeviceType.Desktop)

  const device = $derived(getDeviceInfo(deviceType))

  $effect(() => {
    document.body.classList.add(deviceType)

    return () => document.body.classList.remove(...deviceValues)
  })

  onMount(() => {
    const queries = DEVICE_BREAKPOINTS.map(({ breakpoint, device }) => ({
      device,
      media: window.matchMedia(`(max-width: ${BREAKPOINTS[breakpoint]})`),
    }))

    const onBreakpointChange = () => (deviceType = getViewportDeviceType(queries))

    onBreakpointChange()
    queries.forEach(({ media }) => media.addEventListener('change', onBreakpointChange))

    return () => {
      queries.forEach(({ media }) => media.removeEventListener('change', onBreakpointChange))
    }
  })

  return {
    device: {
      get $() {
        return device
      },
    },
  }
})
