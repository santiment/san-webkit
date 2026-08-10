import { onMount } from 'svelte'

import { createCtx } from '$lib/utils/index.js'

import { BREAKPOINTS } from './breakpoints.js'

export enum DeviceType {
  Desktop = 'desktop',
  Tablet = 'tablet',
  Phone = 'phone',

  /** @deprecated use [DeviceType.Phone] instead */
  PhoneXs = 'phone-xs',
}

const deviceValues = Object.values(DeviceType)

export type DeviceInfo = ReturnType<typeof getDeviceInfo>

export function getDeviceInfo(type: DeviceType) {
  const isPhone = type === DeviceType.Phone || type === DeviceType.PhoneXs
  const isTablet = type === DeviceType.Tablet
  const isDesktop = type === DeviceType.Desktop
  const isMobile = isPhone || isTablet

  return { type, isPhone, isTablet, isMobile, isDesktop }
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
