<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import Switch from './Switch.svelte'

  type TProps = Omit<ComponentProps<typeof Switch>, 'icon'>

  let { checked = $bindable(false), ...rest }: TProps = $props()
</script>

<Switch
  bind:checked
  icon={{ active: { id: 'eye-filled' }, inactive: { id: 'eye-crossed-filled' } }}
  {...rest}
/>
