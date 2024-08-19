<script lang="ts">
  import { BROWSER } from 'esm-env'
  import { Toaster } from 'svelte-sonner'
</script>

{#if BROWSER}
  <Toaster
    position="bottom-left"
    toastOptions={{
      unstyled: true,
    }}
  ></Toaster>
{/if}
