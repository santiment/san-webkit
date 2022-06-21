<script>
  export let isAppUpdateAvailable
  export let version
</script>

<hr />

<section>
  {#if isAppUpdateAvailable}
    <button class="btn-ghost fluid" on:click={() => window.location.reload()}>
      Update available. Restart now
    </button>
  {:else}
    <div class="latest caption">
      You have the latest version!
      <div class="c-waterloo">{version}</div>
    </div>
  {/if}
</section>

<hr />

<style>
  .latest {
    padding: 2px 8px;
  }

  .btn-ghost {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section {
    padding: 8px;
  }

  hr {
    background: var(--porcelain);
    height: 1px;
    border: none;
  }
</style>
