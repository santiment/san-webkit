<script lang="ts">
  import { cn } from '../../utils/index.js'

  type TProps = {
    class?: string
    index: number
    points: string[]
  }

  const { class: className, points, index }: TProps = $props()

  const [cx, cy] = $derived(points[index].split(','))
</script>

<circle class={cn('fill-white stroke-red stroke-[1.5px]', className)} {cx} {cy} r="2.5" />
