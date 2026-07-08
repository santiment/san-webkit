import type { Driver } from 'driver.js'

import { mount, unmount } from 'svelte'

import Step from './Step.svelte'

export type TTourStep = {
  element: string | Element
  title?: string
  description?: string
  side?: 'top' | 'right' | 'bottom' | 'left' | 'over'
}

let activeDriver: Driver | undefined

export const runTour = (steps: TTourStep[]) => {
  void startTour(steps)
}

async function startTour(steps: TTourStep[]) {
  activeDriver?.destroy()

  const [{ driver }] = await Promise.all([import('driver.js'), import('driver.js/dist/driver.css')])

  let stepInstance: ReturnType<typeof mount> | undefined

  activeDriver = driver({
    allowClose: false,

    steps: steps.map(({ element, title, description, side }) => ({
      element,
      popover: { title, description, side },
    })),

    onPopoverRender: (popover, { driver }) => {
      if (stepInstance) unmount(stepInstance)

      popover.wrapper.innerHTML = ''

      stepInstance = mount(Step, {
        target: popover.wrapper,
        props: { driver },
      })
    },

    onDestroyed: () => {
      if (stepInstance) unmount(stepInstance)
      activeDriver = undefined
    },
  })

  activeDriver.drive()
}
