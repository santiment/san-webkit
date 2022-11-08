<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import MobileNavbar from '@/ui/MobileNavbar/Navbar.svelte'
</script>

<Meta title="Example/MobileNavbar" />

<Story name="MobileNavbar">
  <MobileNavbar
    user={{
      id: 0,
      username: 'tim.jo',
      email: 'test@gmail.com',
      avatarUrl: '',
    }}
  />
</Story>

<style>
</style>
