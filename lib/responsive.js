export var Device
;(function (Device) {
  Device['Desktop'] = 'desktop'
  Device['Tablet'] = 'tablet'
  Device['Phone'] = 'phone'
  Device['PhoneXs'] = 'phone-xs'
})(Device || (Device = {}))
export function mapWidthToDevice() {
  if (!process.browser) return Device.Desktop
  const { innerWidth } = window
  if (innerWidth < 480) return Device.PhoneXs
  if (innerWidth < 768) return Device.Phone
  if (innerWidth < 992) return Device.Tablet
  return Device.Desktop
}
const subscribers = []
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
export const responsive$ = {
  subscribe(subscriber) {
    subscribers.push(subscriber)
    subscriber(device)
    return () => {
      const index = subscribers.indexOf(subscriber)
      if (index !== -1) subscribers.splice(index, 1)
    }
  },
}
//# sourceMappingURL=responsive.js.map
