import type { Config } from 'driver.js'

import { mount } from 'svelte'

import CustomPopover from './CustomPopover.svelte'

export async function interactiveTour(initialConfig: Config) {
  await import('driver.js/dist/driver.css')

  const { driver: driverInstance } = await import('driver.js')

  return driverInstance({
    ...initialConfig,

    onPopoverRender: (popover, { config: _, state: _s, driver }) => {
      popover.wrapper.innerHTML = ''

      mount(CustomPopover, {
        target: popover.wrapper,
        props: {
          driver,
        },
      })
    },
  })
}
