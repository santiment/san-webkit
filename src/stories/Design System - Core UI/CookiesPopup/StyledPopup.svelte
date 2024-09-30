<script context="module" lang="ts">
  export enum Accent {
    Purple = '$style.purple',
    Blue = '$style.blue',
  }
</script>

<script lang="ts">
  import CookiesPopup from '$ui/app/CookiesPopup/CookiesPopup.svelte'

  export let accent: Accent
</script>

<CookiesPopup class={accent} />

<style>
  .purple {
    --accent: var(--purple);
    --accent-hover: var(--purple-hover);
    --accent-light-3: var(--purple-light-3);
  }

  .blue {
    --accent: var(--blue);
    --accent-hover: var(--blue-hover);
    --accent-light-3: var(--blue-light-3);
  }
</style>
