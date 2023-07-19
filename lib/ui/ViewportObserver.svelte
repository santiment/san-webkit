<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  const intersectionDispatcher = ([{ isIntersecting }]) =>
    dispatch(isIntersecting ? 'intersect' : 'leaving')

  export let options
  export let top = false
  export let isObserving = true

  let anchor
  let observer

  $: observer && isObserving && observer.observe(anchor)

  $: if (anchor) {
    observer = isObserving
      ? new IntersectionObserver(intersectionDispatcher, options)
      : observer && observer.unobserve(anchor)
  }
</script>

{#if top}
  <p bind:this={anchor} />
  <slot />
{:else}
  <slot />
  <p bind:this={anchor} />
{/if}
