<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import AccountStatus from '@/ui/AccountStatus.svelte'
</script>

<Meta title="Example/Profile" component={AccountStatus} />

<Template let:args>
  <AccountStatus currentUser={null} />
</Template>

<Story name="Guest Status" />
