import { onMount } from 'svelte'
import {
  Subject,
  Subscription,
  groupBy,
  mergeMap,
  pipe,
  share,
  type Observable,
  type OperatorFunction,
  type UnaryFunction,
} from 'rxjs'

export function useObserveFnCall<GData = undefined>(
  fn: <T>() => UnaryFunction<T extends Observable<unknown> ? any : Observable<GData>, any>,
) {
  const subject = new Subject<GData>()
  let subscriber: Subscription

  onMount(() => {
    const subscriber = ensureSubscription()
    return () => {
      subscriber.unsubscribe()
      subject.complete()
    }
  })

  function ensureSubscription() {
    if (subscriber) return subscriber

    return (subscriber = subject.pipe(fn(), share()).subscribe())
  }

  type Result = GData extends undefined ? () => void : (data: GData) => void

  return ((data) => {
    ensureSubscription()
    subject.next(data)
  }) as Result
}

export const pipeGroupBy = <T>(groupFn: (data: T) => any, operator: OperatorFunction<T, any>) =>
  pipe(
    groupBy(groupFn),
    mergeMap((grouped) => grouped.pipe(operator)),
  )
