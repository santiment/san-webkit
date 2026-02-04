<script lang="ts" module>
  import Button from '$ui/core/Button/Button.svelte'
  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'

  import LoginToUseFeature from './index.svelte'

  export const showLoginToUseFeatureDialog$ = () => dialogs$.new(LoginToUseFeature)
</script>

<script lang="ts">
  const { Controller }: TDialogProps = $props()

  const close = () => Controller.close()
</script>

<Dialog class="w-full max-w-[600px] p-12 text-center">
  <Button class="absolute right-6 top-5" icon="close" onclick={close}></Button>

  <h3 class="mb-6 text-2xl font-medium">Log in to use this feature!</h3>

  <section class="mx-auto max-w-md">
    <p class="mb-8 text-base text-waterloo">
      Log in to access more Sanbase features including real-time metrics, market alerts,
      personalized watchlists and other information on 1500+ cryptocurrencies
    </p>

    <section class="flex gap-4">
      <Button variant="fill" size="lg" class="w-full justify-center" href="/login" onclick={close}>
        Log in
      </Button>
      <Button
        variant="border"
        size="lg"
        class="w-full justify-center"
        href="/sign-up"
        onclick={close}
      >
        Create an account
      </Button>
    </section>
  </section>
</Dialog>
