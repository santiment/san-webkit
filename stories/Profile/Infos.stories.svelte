<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Info from '@/ui/Profile/Info.svelte'
</script>

<Meta title="Example/Profile" component={Info} />

<Story name="Infos">
  <div class="border">
    <Info
      user={{
        id: 0,
        username: 'Username',
        email: '',
        avatarUrl: '',
      }} />
  </div>
</Story>

<style>
  .border {
    max-width: 420px;
  }
</style>
