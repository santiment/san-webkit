<script>import { track } from './../../analytics';
import { mutateEmailLogin } from './../../api/login';
import InputWithIcon from './../../ui/InputWithIcon.svelte';
export let verifiedEmail = '';
let email = '';
let loading = false;

function onSubmit({
  currentTarget
}) {
  email = currentTarget.email.value;
  loading = true;
  mutateEmailLogin(email).then(onSuccess);
  track.event('sign_up', {
    method: 'email'
  });
}

function onSuccess({
  emailLogin
}) {
  loading = false;
  if (emailLogin.success) verifiedEmail = email;
}</script>

<form on:submit|preventDefault={onSubmit}>
  <InputWithIcon
    big
    type="email"
    placeholder="Your email"
    icon="envelope"
    w="16"
    h="12"
    name="email" />

  <button class="btn-1 btn--l row h-center fluid mrg-l mrg--t" type="submit" class:loading
    >Continue</button>
</form>
