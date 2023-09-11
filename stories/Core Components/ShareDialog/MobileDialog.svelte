<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { onMount } from 'svelte'
  import DialogStory from './index.svelte'

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface $$Props extends ComponentProps<DialogStory> {}

  onMount(() => {
    document.body.classList.remove('desktop')
    document.body.classList.add('phone')
  })
</script>

<DialogStory {...$$props} />
