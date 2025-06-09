import { onMount } from 'svelte'
import {
  Subject,
  groupBy,
  mergeMap,
  pipe,
  share,
  type Subscription,
  type Observable,
  type OperatorFunction,
  type UnaryFunction,
} from 'rxjs'

export function useObserveFnCall<GData = unknown>(
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

  type Result = unknown extends GData
    ? () => void
    : (...args: undefined extends GData ? [] | [GData] : [GData]) => void

  return ((data) => {
    ensureSubscription()
    subject.next(data as any)
  }) as Result
}

export const pipeGroupBy = <T>(groupFn: (data: T) => any, operator: OperatorFunction<T, any>) =>
  pipe(
    groupBy(groupFn),
    mergeMap((grouped) => grouped.pipe(operator)),
  )
