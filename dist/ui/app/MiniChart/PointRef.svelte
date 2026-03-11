<script lang="ts" generics="GData extends Record<string, any>">
  import { createValueMap } from '../../../utils/index.js'

  import Point from './Point.svelte'

  type TProps = {
    class?: string
    target: number
    data: GData[]
    points: string[]
    getDate: (data: GData) => Date
  }

  const { class: className, target, data, points, getDate }: TProps = $props()

  const index = $derived(getRefIndex(data, points, target))

  function getRefIndex(data: GData[], points: string[], target: number) {
    if (!points || points.length < 3) {
      return -1
    }

    const { length } = data
    const first = +getDate(data[0])
    const last = +getDate(data[length - 1])

    let index = Math.round(createValueMap(first, last, 0, length)(target))
    if (index === length) index -= 1

    return index
  }
</script>

<Point class={className} {index} {points} />
