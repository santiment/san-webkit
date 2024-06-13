import { Subject, share, type Observable, type UnaryFunction } from 'rxjs'
import { untrack } from 'svelte'

export function useObserveFnCall<GData = undefined>(
  fn: <T>() => UnaryFunction<T extends Observable<unknown> ? any : Observable<GData>, any>,
) {
  const subject = new Subject<GData>()

  $effect(() =>
    untrack(() => {
      const subscriber = subject.pipe(fn(), share()).subscribe()
      return () => {
        subscriber.unsubscribe()
        subject.complete()
      }
    }),
  )

  type Result = GData extends undefined ? () => void : (data: GData) => void

  return ((data) => subject.next(data)) as Result
}
