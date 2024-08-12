<script lang="ts">
  import Button from '$ui/core/Button'

  const {
    href = '',
    icon,
    count,
    onclick = () => {},
  }: { href?: string; icon: string; count: number; onclick?: VoidFunction } = $props()
</script>

<Button
  {href}
  {icon}
  w={16}
  h={16}
  class="items-center gap-1 text-sm text-waterloo row hover:text-green"
  {onclick}
>
  {count}
</Button>
