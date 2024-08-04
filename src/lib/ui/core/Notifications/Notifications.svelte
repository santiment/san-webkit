<script lang="ts">
  import { BROWSER } from 'esm-env'
  import { Toaster } from 'svelte-sonner'
</script>

{#if BROWSER}
  <Toaster
    position="bottom-left"
    toastOptions={{
      unstyled: true,
      classes: {
        toast: 'border rounded shadow bg-white row p-4 gap-2',
        title: 'text-black font-medium',
        description: 'text-waterloo',
        success: 'fill-green',
      },
    }}
  ></Toaster>
{/if}
