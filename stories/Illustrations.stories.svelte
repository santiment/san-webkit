<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Svg from '@/ui/Svg/svelte'
  import illustrations from './illustrations.json'
</script>

<Meta title="Example/Illustrations" />

<Template let:args>
  <div class="row">
    {#each illustrations as { key, content, width, height }}
      <div class="caption border column v-center">
        <div class="icon">
          <Svg illus id={key} w={width} h={height} />
        </div>
        {key}
      </div>
    {/each}
  </div>
</Template>

<Story name="Illustrations" />

<style>
  .row {
    flex-wrap: wrap;
    gap: 16px;
  }

  .caption {
    padding: 10px;
    align-self: flex-end;
  }

  .icon {
    padding: 10px;
    border-radius: 4px;
  }
</style>
