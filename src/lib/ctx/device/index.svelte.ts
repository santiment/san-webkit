import { BROWSER } from 'esm-env'
import { untrack } from 'svelte'

import { createCtx, ss } from '$lib/utils/index.js'

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

const device = ss(getDeviceInfo(DeviceType.Desktop))

const getViewportDeviceType = (queries: DeviceMediaQuery[]) =>
  queries.find(({ media }) => media.matches)?.device ?? DeviceType.Desktop

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
  const queries = DEVICE_BREAKPOINTS.map(({ breakpoint, device }, i, deviceBreakpoints) => {
    const prevDevice = i > 0 ? deviceBreakpoints.at(i - 1) : undefined
    const prevBreakpoint = prevDevice ? BREAKPOINTS[prevDevice.breakpoint] : '0px'

    return {
      device,
      media: window.matchMedia(
        `(min-width: calc(${prevBreakpoint} + 1px)) and (max-width: ${BREAKPOINTS[breakpoint]})`,
      ),
    }
  })

  const onBreakpointChange = () => onDeviceTypeChange(getViewportDeviceType(queries))

  onBreakpointChange()

  queries.forEach(({ media }) => media.addEventListener('change', onBreakpointChange))
}

export const useDeviceCtx = createCtx('useDeviceCtx', (deviceType?: DeviceType) => {
  if (deviceType && !BROWSER) onDeviceTypeChange(deviceType)

  return { device }
})
