<script lang="ts">
  import type { Component as ComponentType, ComponentProps } from 'svelte'

  type T = $$Generic<ComponentType>

  const { Component, ...rest }: { Component: T } & ComponentProps<T> = $props()
</script>

<main class="flex min-h-[inherit] items-center justify-center">
  <Component {...rest} />
</main>
