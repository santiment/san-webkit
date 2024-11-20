<script lang="ts">
  import MobileHeader from '$ui/app/classic/MobileHeader/MobileHeader.svelte'
</script>

<MobileHeader title="Custom title">
  {#snippet share()}
    <div>share part</div>
  {/snippet}
</MobileHeader>
