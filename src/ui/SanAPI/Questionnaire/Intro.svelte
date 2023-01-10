<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import { queryCurrentUser } from '@/api/analytics'
  import { startQuestionnaire } from './api'
  import { Page } from './types'

  export let page: Page
  export let closeDialog

  function onStart() {
    queryCurrentUser().then((currentUser) => {
      if (!currentUser) {
        window.__onLinkClick?.('/login')
        return closeDialog()
      }

      page = Page.Do
      return startQuestionnaire()
    })
  }
</script>

<button class="btn close row hv-center" on:click={closeDialog}>
  <Svg id="close" w="12" />
</button>
<main class="column hv-center fluid">
  <Svg illus id="san-api/questionnaire" w="220" h="225" class="$style.questionnaire" />

  <h3 class="h3 mrg-l mrg--b">Start the questionnaire</h3>

  <p class="body-2 c-fiord txt-center">
    After submiting the questionnaire you will get <br />
    instant access to our free package of datasets, <br />
    containing up to 3 years of data <br />
    for 20 metrics on top of 16 assets
  </p>

  <button class="btn-1 txt-center body-2 action fluid" on:click={onStart}>Start</button>
</main>

<style>
  .close {
    --fill: var(--waterloo);
    position: absolute;
    right: 24px;
    top: 24px;
    height: 12px;
  }

  main {
    padding: 64px 120px 80px;
  }

  .questionnaire {
    margin-bottom: 40px;
  }

  .action {
    --bg: var(--blue);
    --bg-hover: var(--blue-hover);
    max-width: 164px;
    height: 40px;
    margin-top: 40px;
  }
</style>
