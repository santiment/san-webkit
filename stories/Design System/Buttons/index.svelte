<script>
  import Svg from '@/ui/Svg/svelte'
</script>

<main>
  <div class="row">
    <div>
      <div class="caption">.btn</div>
      <div class="btn" style="--color-hover: var(--green)">Text</div>
    </div>
  </div>

  <div class="row">
    <div>
      <div class="caption">.btn-0</div>
      <div class="btn-0">Text</div>
    </div>

    <div>
      <div class="caption">.btn-0.btn--orange</div>
      <div class="btn-0 btn--orange">Text</div>
    </div>
  </div>

  <div class="row">
    <div>
      <div class="caption">.btn-1</div>
      <div class="btn-1">Text</div>
    </div>

    <div>
      <div class="caption">.btn-1.btn--s</div>
      <div class="btn-1 btn--s">Text</div>
    </div>

    <div>
      <div class="caption">.btn-1.btn-3</div>
      <div class="btn-1 btn-3">
        <Svg id="info" w="16" />
      </div>
    </div>

    <div>
      <div class="caption">.btn-1.loading</div>
      <div class="btn-1 loading">Text</div>
    </div>

    <div>
      <div class="caption">.btn-1.disabled</div>
      <div class="btn-1 disabled">Text</div>
    </div>

    <div>
      <div class="caption">.btn-1.btn--orange</div>
      <div class="btn-1 btn--orange">Text</div>
    </div>
  </div>

  <div class="row">
    <div>
      <div class="caption">.btn-2</div>
      <div class="btn-2">Text</div>
    </div>

    <div>
      <div class="caption">.btn-2.btn--s</div>
      <div class="btn-2 btn--s">Text</div>
    </div>

    <div>
      <div class="caption">.btn-2.btn-3</div>
      <div class="btn-2 btn-3">
        <Svg id="info" w="16" />
      </div>
    </div>

    <div>
      <div class="caption">.btn-2.loading</div>
      <div class="btn-2 loading">Text</div>
    </div>

    <div>
      <div class="caption">.btn-2.disabled</div>
      <div class="btn-2 disabled">Text</div>
    </div>

    <div>
      <div class="caption">.btn-2.btn--orange</div>
      <div class="btn-2 btn--orange">Text</div>
    </div>

    <div>
      <div class="caption">.btn-2.btn-1.btn--orange</div>
      <div class="btn-2 btn-1 btn--orange">Text</div>
    </div>
  </div>

  <div class="row">
    <div>
      <div class="caption">.btn-3</div>
      <div class="btn-3">
        <Svg id="info" w="16" />
      </div>
    </div>

    <div>
      <div class="caption">.btn-3.active</div>
      <div class="btn-3 active">
        <Svg id="info" w="16" />
      </div>
    </div>

    <div>
      <div class="caption">.btn-3.loading</div>
      <div class="btn-3 loading">
        <Svg id="info" w="16" />
      </div>
    </div>

    <div>
      <div class="caption">.btn-3.disabled</div>
      <div class="btn-3 disabled">
        <Svg id="info" w="16" />
      </div>
    </div>
  </div>
</main>

<style>
  main {
    padding: 16px;
  }

  .btn-1,
  .btn-2 {
    display: inline-flex;
    /* --loading-size: 3px; */
  }

  .row {
    gap: 22px;
    margin: 0 0 16px;
    border-bottom: 1px solid var(--porcelain);
    padding: 0 0 16px;
  }

  .caption {
    font-family: monospace;
  }
</style>
