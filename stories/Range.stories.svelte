<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Range from '@/ui/Range.svelte'
</script>

<Meta title="Example/Range" component={Range} />

<Template let:args>
  <Range
    class="$style.range"
    {...args}
    selectedIndex={1}
    items={['7', '12h', '24d']}
    onChange={(value) => console.log(value)}
  />
</Template>

<Story name="Default" />

<style>
  .range {
    width: 48px;
  }
</style>
