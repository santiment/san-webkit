<script>
  import { writable } from 'svelte/store'
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import AccountDropdown from '@/ui/AccountDropdown/index.svelte'
  const ui = writable({})
</script>

<Meta title="Example/Profile" component={AccountDropdown} />

<Template let:args>
  <div style="height: 50px;width: 100%;margin: 0;padding:0" />
  <AccountDropdown
    isOpened
    {ui}
    currentUser={args.isLoggedIn
      ? {
          id: args.id,
          username: args.username,
          email: args.email,
          avatarUrl: args.avatarUrl,
          subscriptions: [],
        }
      : null} />
</Template>

<Story
  name="Account"
  args={{
    id: 0,
    username: 'Username',
    email: 'tim12joser@gmail.com',
    avatarUrl: '',
    isLoggedIn: true,
  }} />
