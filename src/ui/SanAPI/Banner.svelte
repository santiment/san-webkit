<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import Banner from './Banner.svelte'

  export const showBanner = (props) => dialogs.show(Banner, props)
</script>

<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Dialog from '@/ui/Dialog'
  import { showQuestionnaire } from './Questionnaire/Questionnaire.svelte'

  let closeDialog

  function onClick() {
    closeDialog()
    showQuestionnaire()
  }
</script>

<Dialog {...$$props} noTitle bind:closeDialog class="$style.dialog">
  <button class="btn close" on:click={closeDialog}>
    <Svg id="close" w="16" />
  </button>
  <div class="row wrapper">
    <Svg illus id="san-api/banner" w="360" h="338" class="$style.banner" />
    <div class="column">
      <h3 class="h3">Get our historical data package for free 🎉</h3>

      <p class="body-1 txt-m c-fiord mrg-xl mrg--b">
        Get access to an unparalleled <br />
        free package of datasets containing:
      </p>

      <ul class="body-2 c-fiord">
        <li class="row v-center mrg-l mrg--b">
          <div class="check row hv-center mrg-m mrg--r">
            <Svg id="checkmark" w="10" h="7" class="$style.checkmark" />
          </div>
          Up to 3 years of historical data
        </li>
        <li class="row v-center mrg-l mrg--b">
          <div class="check row hv-center mrg-m mrg--r">
            <Svg id="checkmark" w="10" h="7" class="$style.checkmark" />
          </div>
          Data includes 16 top assets
        </li>
        <li class="row v-center">
          <div class="check row hv-center mrg-m mrg--r">
            <Svg id="checkmark" w="10" h="7" class="$style.checkmark" />
          </div>
          20 most popular metrics for every asset
        </li>
      </ul>

      <button class="btn-1 txt-center body-2 action" on:click={onClick}>
        Take the questionnaire
      </button>
    </div>
  </div>
</Dialog>

<style lang="scss">
  .dialog {
    max-width: 960px !important;
    padding: 64px 100px 64px 90px;
  }

  .close {
    --fill: var(--waterloo);
    position: absolute;
    right: 24px;
    top: 24px;
  }

  .wrapper {
    gap: 90px;
  }

  .banner {
    padding-top: 22px;
    padding-bottom: 23px;
  }

  h3 {
    margin-bottom: 40px;
  }

  .check {
    height: 24px;
    width: 24px;
    background: var(--blue-light-1);
    border-radius: 100%;
  }

  .checkmark {
    fill: var(--blue);
  }

  .action {
    --bg: var(--blue);
    --bg-hover: var(--blue-hover);
    height: 40px;
    margin-top: 40px;
  }
</style>
