<script lang="ts">
  import AccountDropdown from '@/ui/AccountDropdown/index.svelte'

  export let currentUser: SAN.Author | null

  function onLogoutClick() {
    console.log('LOG OUT')
  }
</script>

<section class="row hv-center">
  <AccountDropdown {currentUser} {onLogoutClick} />
</section>

<style>
  section {
    padding: 12px;
  }
</style>
