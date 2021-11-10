<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import CookiesPopup from '@/ui/CookiesPopup.svelte'
  import { deleteSavedValue } from '../src/utils/localStorage'

  deleteSavedValue('COOKIE_POLICY_ACCEPTED')
</script>

<Meta title="Example/Cookies" component={CookiesPopup} />

<Template let:args>
  <CookiesPopup {...args} />
</Template>

<Story name="Green accent" />

<Story name="Purple accent" args={{ class: '$style.purple' }} />

<style>
  .purple {
    --accent: var(--purple);
    --accent-hover: var(--purple-hover);
    --accent-light-3: var(--purple-light-3);
  }
</style>
