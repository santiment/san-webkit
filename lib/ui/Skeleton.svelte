<script>import { fade } from 'svelte/transition';
export let isActive = true;</script>

<slot />
{#if isActive}<div class="skeleton" out:fade />{/if}

<style>
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
</style>
