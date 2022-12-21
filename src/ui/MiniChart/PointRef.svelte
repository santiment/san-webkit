<script context="module" lang="ts">
  export function getRefCoordinates(
    data: any[],
    points: string[],
    target: number,
    datetimeKey = 'd',
  ) {
    if (!points || points.length < 3) {
      return {
        index: -1,
        coordinates: [],
      }
    }

    const { length } = data
    const first = +new Date(data[0][datetimeKey])
    const last = +new Date(data[length - 1][datetimeKey])

    let index = Math.round(map(target, first, last, 0, length))
    if (index === length) index -= 1

    const point = points[index]

    return {
      index,
      coordinates: point ? point.split(',') : [],
    }
  }
</script>

<script lang="ts">
  import { map } from '@/utils'

  export let target: number
  export let data: any[]
  export let points: string[]
  export let stroke = 'var(--casper)'
  export let datetimeKey = 'd'

  $: [cx, cy] = getRefCoordinates(data, points, target, datetimeKey).coordinates
</script>

<circle {cx} {cy} {stroke} r="3.5" />

<style>
  circle {
    fill: var(--white);
    stroke-width: 1.5px;
  }
</style>
