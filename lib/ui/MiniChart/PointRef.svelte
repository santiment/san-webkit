<script>
  import { map } from './../../utils'
  export let target
  export let data
  export let points
  export let stroke = 'var(--casper)'
  export let datetimeKey = 'd'

  $: [cx, cy] = getRefCoordinates(points)

  function getRefCoordinates(points) {
    if (!points || points.length < 3) return []
    const { length } = data
    const first = +new Date(data[0][datetimeKey])
    const last = +new Date(data[length - 1][datetimeKey])
    const index = Math.round(map(target, first, last, 0, length))
    const point = points[index]
    return point ? point.split(',') : []
  }
</script>

<circle {cx} {cy} {stroke} r="3.5" />

<style>
  circle {
    fill: var(--white);
    stroke-width: 1.5px;
  }
</style>
