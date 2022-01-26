<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Author from '@/ui/Author/svelte'
</script>

<Meta title="Example/Author" component={Author} />

<Template let:args>
  <Author
    user={{
      id: args.id,
      username: args.username,
      email: args.email,
      avatarUrl: args.avatarUrl,
    }}
  />
</Template>

<Story
  name="Author"
  args={{
    id: 0,
    username: 'Username',
    email: '',
    avatarUrl: '',
  }}
/>
