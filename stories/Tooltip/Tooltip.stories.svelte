<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Tooltip from '@/ui/Tooltip/svelte'
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
  }} />

<Template let:args>
  <div class="row justify">
    <Tooltip>
      <div slot="trigger">Bottom / start align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip align="center">
      <div slot="trigger">Bottom / center align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip align="end">
      <div slot="trigger">Bottom / end align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
  </div>

  <div class="row justify mrg-xxl mrg--t">
    <Tooltip position="right">
      <div slot="trigger">Right / start align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip position="right" align="center">
      <div slot="trigger">Right / center align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip position="right" align="end">
      <div slot="trigger">Right / end align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
  </div>

  <div class="row justify mrg-xxl mrg--t">
    <Tooltip position="left">
      <div slot="trigger">Left / start align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip position="left" align="center">
      <div slot="trigger">Left / center align</div>

      <div slot="tooltip" class="tooltip">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </Tooltip>
    <Tooltip position="left" align="end">
      <div slot="trigger">Left / end align</div>

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
  }} />

<style>
  .tooltip {
    padding: 8px 12px;
    max-width: 250px;
  }
</style>
