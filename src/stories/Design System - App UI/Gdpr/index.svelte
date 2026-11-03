<script lang="ts">
  import { CurrentUserGdpr } from '$ui/app/Gdpr/index.js'

  type TProps = {
    class?: string
    title?: string
    description?: string
  }

  const { class: className = 'sm:flex-1', title, description }: TProps = $props()
</script>

<main class="flex min-h-dvh items-center justify-center sm:flex-col sm:items-stretch">
  <CurrentUserGdpr
    class={className}
    {title}
    {description}
    onAccept={(username) => console.log('username', username)}
  >
    <div>Page under the GDPR</div>
  </CurrentUserGdpr>
</main>
