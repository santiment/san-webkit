<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import ProjectIcon from '@/ui/ProjectIcon.svelte'
</script>

<Meta
  title="Example/ProjectIcon"
  component={ProjectIcon}
  argTypes={{
    class: { control: 'text' },
    slug: { control: 'text' },
    size: { control: 'number' },
    placeholderSize: { control: 'number' },
  }}
/>

<Template let:args>
  <div class="column mrg-xl mrg--b">
    <div class="h4 mrg-s mrg--b">Default size</div>
    <div class="row" style="gap: 16px">
      <ProjectIcon slug="bitcoin" {...args} />
      <ProjectIcon slug="ethereum" {...args} />
      <ProjectIcon slug="missing" {...args} />
    </div>
  </div>

  <div class="column">
    <div class="h4 mrg-s mrg--b">Size = 40px</div>
    <div class="row" style="gap: 16px">
      <ProjectIcon size={40} slug="bitcoin" {...args} />
      <ProjectIcon size={40} slug="ethereum" {...args} />
      <ProjectIcon size={40} slug="missing" {...args} />
    </div>
  </div>
</Template>

<Story name="ProjectIcon" />
