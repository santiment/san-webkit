<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import Switch from './Switch.svelte'

  type TProps = Omit<ComponentProps<typeof Switch>, 'icon'>

  const props: TProps = $props()
</script>

<Switch
  icon={{ active: { id: 'eye-filled' }, inactive: { id: 'eye-crossed-filled' } }}
  {...props}
/>
