<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Svg from '@/ui/Svg/svelte'
</script>

<Meta title="Example/Buttons" />

<Template let:args>
  <div class="row">
    <div>
      <div>.btn.btn-1</div>
      <div class="btn btn-1">Text</div>
    </div>

    <div>
      <div>.btn.btn-1.btn-s</div>
      <div class="btn btn-1 btn-s">Text</div>
    </div>

    <div>
      <div>.btn.btn-1.btn-xs</div>
      <div class="btn btn-1 btn-xs">
        <Svg id="info" w="16" />
      </div>
    </div>

    <div>
      <div>.btn.btn-1.loading</div>
      <div class="btn btn-1 loading">Text</div>
    </div>

    <div>
      <div>.btn.btn-1.disabled</div>
      <div class="btn btn-1 disabled">Text</div>
    </div>
  </div>

  <div class="row">
    <div>
      <div>.btn.btn-1</div>
      <div class="btn btn-2">Text</div>
    </div>

    <div>
      <div>.btn.btn-2.btn-s</div>
      <div class="btn btn-2 btn-s">Text</div>
    </div>

    <div>
      <div>.btn.btn-2.btn-xs</div>
      <div class="btn btn-2 btn-xs">
        <Svg id="info" w="16" />
      </div>
    </div>

    <div>
      <div>.btn.btn-2.loading</div>
      <div class="btn btn-2 loading">Text</div>
    </div>

    <div>
      <div>.btn.btn-2.disabled</div>
      <div class="btn btn-2 disabled">Text</div>
    </div>
  </div>
</Template>

<Story name="Buttons" />

<style>
  .btn {
    display: inline-flex;
    /* --loading-size: 3px; */
  }

  .row {
    gap: 16px;
  }
</style>
