<script lang="ts">
  import { UI$$ } from '@/stores/ui'
  import AccountDropdown from '@/ui/AccountDropdown/index.svelte'

  export let currentUser: SAN.Author | null

  const { ui$ } = UI$$({ isLiteVersion: true })

  function onLogoutClick() {
    console.log('LOG OUT')
  }

  function onOldVersionClick() {
    $ui$.isLiteVersion = false
  }
</script>

<section class="row hv-center">
  <AccountDropdown {currentUser} {onLogoutClick} {onOldVersionClick} />
</section>

<style>
  section {
    padding: 12px;
  }
</style>
