<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Tooltip from '@/ui/Tooltip'
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
  <div class="row justify">
    <Tooltip let:trigger>
      <div use:trigger>Bottom / start align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip align="center" let:trigger>
      <div use:trigger>Bottom / center align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip align="end" let:trigger>
      <div use:trigger>Bottom / end align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
  </div>

  <div class="row justify mrg-xxl mrg--t">
    <Tooltip position="right" let:trigger>
      <div use:trigger>Right / start align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip position="right" align="center" let:trigger>
      <div use:trigger>Right / center align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip position="right" align="end" let:trigger>
      <div use:trigger>Right / end align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
  </div>

  <div class="row justify mrg-xxl mrg--t">
    <Tooltip position="left" let:trigger>
      <div use:trigger>Left / start align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip position="left" align="center" let:trigger>
      <div use:trigger>Left / center align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip position="left" align="end" let:trigger>
      <div use:trigger>Left / end align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
  </div>

  <div class="row justify mrg-xxl mrg--t">
    <Tooltip position="top">
      <div slot="trigger">Top / start align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip position="top" align="center">
      <div slot="trigger">Top / center align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip position="top" align="end">
      <div slot="trigger">Top / end align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
  </div>
</Template>

<Story
  name="Tooltip"
  args={{
    primary: true,
    label: 'Button',
  }}
/>

<style>
  .tooltip {
    padding: 8px 12px;
    max-width: 250px;
  }
</style>
