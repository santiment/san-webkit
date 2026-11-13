<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import UniversalInput from './UniversalInput.svelte'

  type TProps = Omit<Extract<ComponentProps<typeof UniversalInput>, { as: 'input' }>, 'as'>

  const props: TProps = $props()
</script>

<UniversalInput as="input" {...props} />
