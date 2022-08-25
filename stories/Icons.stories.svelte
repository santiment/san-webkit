<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Svg from '@/ui/Svg/svelte'
  import icons from './icons.json'
</script>

<Meta title="Example/Icons" />

<Template let:args>
  <div class="row">
    {#each icons as { key, width, height }}
      <div class="column caption hv-center">
        <div class="icon row hv-center">
          <Svg id={key} w={width} h={height} />
        </div>
        {key}
      </div>
    {/each}
  </div>
</Template>

<Story name="Icons" />

<style>
  .row {
    flex-wrap: wrap;
    gap: 24px;
  }

  .caption {
    text-align: center;
  }

  .icon {
    width: 48px;
    height: 48px;
    padding: 10px;
    background: var(--athens);
    border-radius: 4px;
  }
</style>
