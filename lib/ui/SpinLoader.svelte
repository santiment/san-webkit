<script>export let fixed = false;
export let bg = false;
export let size = 48;</script>

<loader class="row hv-center" class:fixed class:bg>
  <loading-spin style="--loading-size:{size}px" />
</loader>

<style>
  loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    opacity: 0.8;
  }

  .bg {
    background: var(--porcelain);
    width: 150px;
    height: 100px;
  }

  .fixed {
    position: fixed;
  }

  loading-spin {
    border-width: 6px;
  }
</style>
