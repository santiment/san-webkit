<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import AccountStatus from '@/ui/AccountStatus.svelte'
</script>

<Meta title="Example/Profile" component={AccountStatus} />

<Template let:args>
  <div style="height: 50px;width: 100%;margin: 0;padding:0" />
  <AccountStatus currentUser={args.currentUser} />
</Template>

<Story
  name="Guest Status"
  args={{
    currentUser: null,
  }} />

<Story
  name="Login Free trial Status"
  args={{
    currentUser: {
      id: 0,
      username: 'Username',
      email: 'tim12joser@gmail.com',
      avatarUrl: '',
      isLoggedIn: true,
      subscriptions: [],
    },
  }} />
