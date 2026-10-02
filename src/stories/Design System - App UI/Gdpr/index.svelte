<script lang="ts">
  import { CurrentUserGdpr } from '$ui/app/Gdpr/index.js'
</script>

<main class="flex min-h-dvh items-center justify-center sm:flex-col sm:items-stretch">
  <CurrentUserGdpr class="sm:flex-1" onAccept={(username) => console.log('username', username)}>
    <div>Page under the GDPR</div>
  </CurrentUserGdpr>
</main>
