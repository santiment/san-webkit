<script>
  import { writable } from 'svelte/store'
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import AccountDropdown from '@/ui/AccountDropdown/index.svelte'
  const ui = writable({})
</script>

<Meta title="Example/Profile" component={AccountDropdown} />

<Template let:args>
  <AccountDropdown
    isOpened
    {ui}
    currentUser={{
      id: args.id,
      username: args.username,
      email: args.email,
      avatarUrl: args.avatarUrl,
      subscriptions: [],
    }} />
</Template>

<Story
  name="Account"
  args={{
    id: 0,
    username: 'Username',
    email: '',
    avatarUrl: '',
  }} />
