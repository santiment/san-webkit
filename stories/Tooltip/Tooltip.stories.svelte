<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Tooltip from '@/ui/Tooltip.svelte'
</script>

<Meta
  title="Example/Tooltip"
  component={Tooltip}
  argTypes={{
    class: { control: 'text' },
    activeClass: { control: 'text' },

    isEnabled: { control: 'boolean' },
    isOpened: { control: 'boolean' },
    dark: { control: 'boolean' },

    position: {
      control: { type: 'select', options: ['bottom', 'top', 'left', 'right'] },
    },
    on: {
      control: { type: 'select', options: ['mouseeneter', 'click'] },
    },

    duration: { control: 'number' },
    openDelay: { control: 'number' },
    closeTimeout: { control: 'number' },
  }}
/>

<Template let:args>
  <Tooltip>
    <div slot="trigger">Trigger</div>

    <svelte:fragment slot="tooltip">TOOOLTIP</svelte:fragment>
  </Tooltip>
</Template>

<Story
  name="Primary"
  args={{
    primary: true,
    label: 'Button',
  }}
/>
