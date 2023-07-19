<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Header from '@/ui/MobileHeader/Header.svelte'
</script>

<Meta title="Example/MobileHeader" component={Header} />

<Template let:args>
  <Header {...args} />
</Template>

<Story name="MobileHeader" />

<Story name="MobileHeader with title" args={{ title: 'Markets overview' }} />
