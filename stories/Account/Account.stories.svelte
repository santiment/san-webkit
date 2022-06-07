<script>
  import { writable } from 'svelte/store'
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import AccountDropdown from '@/ui/AccountDropdown/index.svelte'
  const ui = writable({})
</script>

<Meta title="Example/Profile" component={AccountDropdown} />

<Template let:args>
  <AccountDropdown isOpened {ui} currentUser={null} />
</Template>

<Story
  name="Account"
  args={{
    id: 0,
    username: 'Username',
    email: '',
    avatarUrl: '',
  }} />
