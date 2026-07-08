import type { Driver, driver as TDriverCreator, DriverHook } from 'driver.js'

import { mount, unmount, type Snippet } from 'svelte'

import Step from './Step.svelte'
import { checkWasTourViewed, getSavedTourState, saveTourState } from './storage.js'

export type TTourStep = {
  element: string | Element
  id: string
  title: string
  description: string

  content?: Snippet
  side?: 'top' | 'right' | 'bottom' | 'left' | 'over'
  onDeselected?: DriverHook
}

export type TTourConfig = Partial<{
  initialStep: number
  onDestroy: () => void
}>

let activeDriver: Driver | undefined

export const Tour = {
  activeId: undefined as undefined | string,

  async start(id: string, steps: TTourStep[], config: TTourConfig = {}) {
    if (Tour.activeId === id) return

    Tour.stop()

    const driver = await importDriver()
    const tourState = getSavedTourState(id)

    let stepInstance: ReturnType<typeof mount> | undefined

    activeDriver = driver({
      allowClose: false,
      smoothScroll: true,

      steps: steps.map(({ element, id, content, onDeselected, ...popover }) => ({
        element,
        popover,
        onDeselected,
        data: { id, content },
      })),

      onPopoverRender(popover, { driver }) {
        if (stepInstance) unmount(stepInstance)

        popover.wrapper.innerHTML = ''

        stepInstance = mount(Step, {
          target: popover.wrapper,
          props: { type: id, driver, tourState },
        })
      },

      onDestroyed() {
        if (stepInstance) unmount(stepInstance)

        saveTourState(tourState)
        config.onDestroy?.()

        Tour.activeId = undefined
      },
    })

    activeDriver.drive(config.initialStep)

    Tour.activeId = id
  },

  stop() {
    activeDriver?.destroy()
  },

  checkWasTourViewed,
}

let createDriver: typeof TDriverCreator
async function importDriver() {
  return createDriver
    ? Promise.resolve(createDriver)
    : Promise.all([import('driver.js'), import('driver.js/dist/driver.css')]).then(
        ([{ driver }]) => (createDriver = driver),
      )
}
