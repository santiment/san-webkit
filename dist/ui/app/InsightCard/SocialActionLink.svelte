<script lang="ts">
  import Button from '../../core/Button/index.js'

  const { href = '', icon, count }: { href?: string; icon: string; count: number } = $props()
</script>

<Button
  {href}
  {icon}
  iconSize={16}
  class="items-center gap-1 text-sm text-waterloo row hover:text-green"
>
  {count}
</Button>
