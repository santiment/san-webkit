import { BROWSER } from 'esm-env'
import { readable } from 'svelte/store'

export function Scheduler(limit = 1, debounceTime = 200) {
  const running = new Set<() => void>()
  const scheduled = new Set<() => void>()
  const debounced = new Set<number>()

  let disabled = false

  return {
    run() {
      if (!BROWSER) return
      if (disabled) return

      if (running.size < limit) {
        Array.from(scheduled)[0]?.()
      }
    },
    delayRun() {
      if (disabled) return

      const id = window.setTimeout(() => {
        debounced.delete(id)
        this.run()
      }, debounceTime)

      debounced.add(id)
    },
    schedule(op: () => Promise<any>) {
      const operation = () => {
        scheduled.delete(operation)
        running.add(operation)

        op().finally(() => {
          running.delete(operation)
          this.delayRun()
        })
      }

      scheduled.add(operation)
      this.run()
    },
    cleanup() {
      disabled = true
      debounced.forEach((id) => window.clearTimeout(id))
    },
  }
}

export function Scheduler$$(limit = 1, debounceTime = 200) {
  const scheduler = Scheduler(limit, debounceTime)
  return readable(scheduler, () => scheduler.cleanup)
}

export type SchedulerType = ReturnType<typeof Scheduler>
