import type { Props } from './svelte'

export const getValue = (item: Props['data'][number], key?: string) =>
  (key ? item[key] : item) as number
