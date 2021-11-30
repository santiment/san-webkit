<script lang="ts">
  import { onDestroy } from 'svelte'
  import moonPath from './moon.svg'

  export let mooned = false
  export let totalVotes: number
  export let moonNode = undefined

  let visible = false
  let enter = false
  let timer

  $: changeVisibility(mooned)

  function changeVisibility(mooned: boolean) {
    clearTimeout(timer)

    if (mooned) {
      visible = true

      return requestAnimationFrame(() => (enter = true))
    }

    enter = false
    timer = setTimeout(() => (visible = false), 400)
  }

  onDestroy(() => {
    clearTimeout(timer)
  })
</script>

{#if visible}
  <div bind:this={moonNode} class="moon box row v-center caption" class:enter>
    <img src={moonPath} alt="moon" class="mrg-xs mrg--r" />
    + {totalVotes}
  </div>
{/if}

<style>
  .moon {
    color: var(--black);
    white-space: nowrap;
    pointer-events: none;
    position: absolute;
    background: var(--white);
    border-radius: inherit;
    padding: 6px;
    top: -36px;
    width: 100%;
    left: 0;
    transform: translateY(-12px);
    opacity: 0;
    animation: scale 0.2s;
    transition: transform 0.4s ease-out, opacity 0.35s ease-out;
  }

  .enter {
    transition-duration: 0.2s, 0.17s;
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    70% {
      transform: scale(1.06);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
