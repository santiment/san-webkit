<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Profile from '@/ui/Profile/svelte'
</script>

<Meta title="Example/Profile" component={Profile} />

<Template let:args>
  <Profile
    user={{
      id: args.id,
      username: args.username,
      email: args.email,
      avatarUrl: args.avatarUrl,
    }} />
</Template>

<Story
  name="Profile"
  args={{
    id: 0,
    username: 'Username',
    email: '',
    avatarUrl: '',
  }} />
