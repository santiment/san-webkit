<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import MobileHeader from '$ui/app/classic/MobileHeader/MobileHeader.svelte'
</script>

<MobileHeader>
  {#snippet share()}
    <div>share part</div>
  {/snippet}
</MobileHeader>
