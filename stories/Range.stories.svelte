<script>
import Index from '@/ui/Svg/index.svelte';

  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

  import Range from '../src/ui/Range.svelte'
</script>

<Meta title="Example/Range" component={Range} />

<Template let:args>
  <Range {...args} style="width: 48px;" items={['7', '12h', '24d']} onChange={(Index, value) => console.log({index: value})} />
</Template>

<Story name="Default" />

