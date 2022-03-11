<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Info from '@/ui/Profile/Info.svelte'
  import { CreationType } from '@/ui/Profile/types'
</script>

<Meta title="Example/Profile" component={Info} />

<Story name="Infos">
  <h2 class="h4">Layouts</h2>
  <div class="border">
    <Info
      type={CreationType.Layout}
      user={{
        id: 113,
        username: 'Username',
        email: '',
        avatarUrl: '',
      }} />
  </div>

  <h2 class="h4 mrg-xxl mrg--t">Watchlists</h2>
  <div class="border">
    <Info
      type={CreationType.Watchlist}
      user={{
        id: 113,
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
