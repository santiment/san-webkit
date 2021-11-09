export enum Device {
  Desktop = 'desktop',
  Tablet = 'tablet',
  Phone = 'phone',
  PhoneXs = 'phone-xs',
}

export function mapWidthToDevice(): Device {
  if (!process.browser) return Device.Desktop

  const { innerWidth } = window

  if (innerWidth < 480) return Device.PhoneXs
  if (innerWidth < 768) return Device.Phone
  if (innerWidth < 992) return Device.Tablet

  return Device.Desktop
}

const subscribers: ((device: Device) => any)[] = []
let device = mapWidthToDevice()
const update = (subscriber) => subscriber(device)

export function startResponsiveController() {
  document.body.classList.add(device)
  window.addEventListener('resize', () => {
    const newDevice = mapWidthToDevice()
    if (newDevice === device) return
    document.body.classList.remove(device)
    device = newDevice
    document.body.classList.add(device)
    subscribers.forEach(update)
  })
}

type Unsubscriber = () => {}
export const responsive$ = {
  subscribe(subscriber: (device: Device) => any): Unsubscriber {
    subscribers.push(subscriber)
    subscriber(device)

    return (() => {
      const index = subscribers.indexOf(subscriber)
      if (index !== -1) subscribers.splice(index, 1)
    }) as Unsubscriber
  },
}
