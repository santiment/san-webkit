<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import { showIntercom } from '../../../../analytics/intercom'
  import alien from '../../../../illus/alien.svg'
</script>

<div class="card column relative">
  <div class="caption txt-m c-waterloo mrg--b mrg-l">You have full access!</div>
  <div class="content column">
    <div class="h4 txt-m mrg--b mrg-xs">Use Pro plan wisely</div>
    <div class="c-waterloo mrg--b mrg-m">
      One on one staff assistance and educational calls upon your request
    </div>
    <div class="bottom row">
      <a href="https://academy.santiment.net/" target="_blank" class="btn-1 row hv-center">
        Academy <Svg id="external-link" w="12" h="12" class="mrg--l mrg-s" />
      </a>
      <button on:click={() => showIntercom()} class="btn-2 row hv-center mrg--l mrg-m">
        Contact support
      </button>
    </div>
  </div>
  <img src={alien} alt="alien" class="alien" />
</div>

<style lang="scss">
  .card {
    width: 100%;
    max-width: 544px;
    padding: 16px 16px 16px 24px;
    background: var(--yellow-light-1);
    border-radius: 8px;
  }

  .content {
    max-width: 300px;
  }

  .bottom {
    height: 42px;
    align-items: flex-end;
  }

  .btn-1 {
    --bg: var(--fiord);
    --bg-hover: var(--fiord);
  }

  .btn-2 {
    --color-hover: var(--orange);
    --bg: var(--white);
  }

  .alien {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
