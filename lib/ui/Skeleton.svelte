<script>
  import { fade } from 'svelte/transition'
  export let isActive = true
</script>

<slot />
{#if isActive}<div class="row" out:fade />{/if}

<style>
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    overflow: hidden;
    border-radius: 4px;
    background: var(--porcelain);
    /* background-size: 400% 100%; */
  }

  div::before {
    content: '';
    width: 400%;
    height: 100%;
    background: linear-gradient(90deg, var(--porcelain) 0, var(--athens) 30%, var(--porcelain) 50%);
    animation: move-gradient 1.2s cubic-bezier(1, 0.54, 0.41, 0.92) infinite;
  }

  @keyframes move-gradient {
    0% {
      transform: translateX(-85%);
    }
    100% {
      transform: translateX(100%);
    }
  }
</style>
