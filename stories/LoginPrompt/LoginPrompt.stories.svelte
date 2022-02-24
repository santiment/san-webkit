<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import LoginPrompt from '@/ui/LoginPrompt/index.svelte'
  import Gdpr from '@/ui/LoginPrompt/Gdpr.svelte'
  import SingUp from '@/ui/LoginPrompt/SignUp.svelte'
  import EmailLogin from '@/ui/LoginPrompt/EmailLogin.svelte'
  import EmailConfirmation from '@/ui/LoginPrompt/EmailConfirmation.svelte'
</script>

<Meta title="Example/LoginPrompt" component={LoginPrompt} />

<Story name="Login">
  <div><LoginPrompt /></div>
</Story>

<Story name="Sign up">
  <div><SingUp /></div>
</Story>

<Story name="Email login">
  <div><EmailLogin /></div>
</Story>

<Story name="Email confirmation">
  <div><EmailConfirmation email="name@email.com" /></div>
</Story>

<Story name="Gdpr">
  <div><Gdpr /></div>
</Story>

<style>
  div {
    max-width: 420px;
  }
</style>
