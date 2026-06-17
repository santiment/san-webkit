import type { Config } from 'driver.js'

import { mount } from 'svelte'

import Step from './Step.svelte'

export async function createTour(initialConfig: Config) {
  await import('driver.js/dist/driver.css')

  const { driver: driverInstance } = await import('driver.js')

  return driverInstance({
    ...initialConfig,

    onPopoverRender: (popover, { driver }) => {
      popover.wrapper.innerHTML = ''

      mount(Step, {
        target: popover.wrapper,
        props: {
          driver,
        },
      })
    },
  })
}
