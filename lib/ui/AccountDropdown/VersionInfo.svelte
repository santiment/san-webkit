<script>
  export let isAppUpdateAvailable
  export let version
</script>

<section>
  {#if isAppUpdateAvailable}
    <button class="btn-ghost row justify v-center fluid" on:click={() => window.location.reload()}>
      Update available. Restart now
    </button>
  {:else}
    <div class="latest caption">
      You have the latest version!
      <div class="c-waterloo">{version}</div>
    </div>
  {/if}
</section>

<style>
  .latest {
    padding: 2px 8px;
  }

  section {
    padding: 8px;
  }
</style>
