import type { Config } from 'driver.js'

import { mount, unmount } from 'svelte'

import Step from './Step.svelte'

export async function createTour(initialConfig: Config) {
  await import('driver.js/dist/driver.css')

  const { driver: driverInstance } = await import('driver.js')

  let stepInstance: ReturnType<typeof mount> | undefined

  const cleanupStep = () => {
    if (!stepInstance) return

    unmount(stepInstance)
    stepInstance = undefined
  }

  return driverInstance({
    ...initialConfig,

    onPopoverRender: (popover, { driver }) => {
      cleanupStep()

      popover.wrapper.innerHTML = ''

      stepInstance = mount(Step, {
        target: popover.wrapper,
        props: {
          driver,
        },
      })
    },

    onDestroyed: (...args) => {
      cleanupStep()
      initialConfig.onDestroyed?.(...args)
    },
  })
}
