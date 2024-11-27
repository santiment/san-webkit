<script lang="ts">
  import { CurrentUserGdpr } from '$ui/app/Gdpr/index.js'
</script>

<main class="flex min-h-[inherit] items-center justify-center">
  <CurrentUserGdpr onAccept={(username) => console.log('username', username)}>
    <div>Page under the GDPR</div>
  </CurrentUserGdpr>
</main>
