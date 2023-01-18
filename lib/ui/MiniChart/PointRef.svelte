<script context="module">export function getRefCoordinates(data, points, target, datetimeKey = 'd') {
  if (!points || points.length < 3) {
    return {
      index: -1,
      coordinates: []
    };
  }
  const {
    length
  } = data;
  const first = +new Date(data[0][datetimeKey]);
  const last = +new Date(data[length - 1][datetimeKey]);
  let index = Math.round(map(target, first, last, 0, length));
  if (index === length) index -= 1;
  const point = points[index];
  return {
    index,
    coordinates: point ? point.split(',') : []
  };
}</script>

<script>import { map } from './../../utils';
export let target;
export let data;
export let points;
export let stroke = 'var(--casper)';
export let datetimeKey = 'd';
$: [cx, cy] = getRefCoordinates(data, points, target, datetimeKey).coordinates;</script>

<circle {cx} {cy} {stroke} r="3.5" />

<style>
  circle {
    fill: var(--white);
    stroke-width: 1.5px;
  }
</style>
