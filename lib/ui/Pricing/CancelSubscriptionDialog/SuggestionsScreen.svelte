<script lang="ts">
  import Screen from './Screen.svelte'
  import { showIntercom } from '@/analytics/intercom'
</script>

<Screen {...$$props}>
  <svelte:fragment slot="title">Cancel subscription?</svelte:fragment>

  <svelte:fragment slot="subtitle">Before you go, give us a chance to help you:</svelte:fragment>

  <svelte:fragment slot="help">
    <a
      class="suggestion btn-2"
      target="_blank"
      rel="noreferrer"
      href="https://academy.santiment.net/education-and-use-cases/"
      >Discover use cases on our Academy</a
    >
    <a
      class="suggestion btn-2"
      target="_blank"
      rel="noreferrer"
      href="https://www.youtube.com/c/SantimentNetwork">Gain insights on our Youtube channel</a
    >
    <button class="suggestion btn-2" on:click={showIntercom}
      >Request a custom subscription plan</button
    >
  </svelte:fragment>
</Screen>

<style lang="scss">
  .suggestion {
    padding: 14px;
    margin-top: 12px;
    --bg: var(--white);
  }
</style>
