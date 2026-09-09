<script lang="ts" module>
  import { page } from '$app/state'

  import { getUrlPath, getFromSearch } from '../../../utils/url/index.js'
  import Button from '../../core/Button/Button.svelte'
  import Dialog, { dialogs$, type TDialogProps } from '../../core/Dialog/index.js'

  import LoginToUseFeature from './index.svelte'

  export const showLoginToUseFeatureDialog$ = () => dialogs$.new(LoginToUseFeature)
</script>

<script lang="ts">
  type TProps = {
    from?: string
  } & TDialogProps

  const { from, Controller }: TProps = $props()

  const fromPath = $derived(from || getUrlPath(page.url))
  const search = $derived(getFromSearch(fromPath))

  const close = () => Controller.close()
</script>

<Dialog class="w-full max-w-[600px] sm:mx-auto sm:h-auto">
  <section class="p-12 text-center">
    <Button class="absolute right-6 top-5" size="lg" icon="close" onclick={close}></Button>

    <h3 class="mb-6 text-2xl font-medium">Log in to use this feature!</h3>

    <section class="mx-auto max-w-md">
      <p class="mb-8 text-base text-waterloo">
        Log in to access more Sanbase features including real-time metrics, market alerts,
        personalized watchlists and other information on 1500+ cryptocurrencies
      </p>

      <section class="flex gap-4 sm:flex-col">
        <Button
          variant="fill"
          size="lg"
          class="flex-1 justify-center"
          href="/login{search}"
          onclick={close}
        >
          Log in
        </Button>
        <Button
          variant="border"
          size="lg"
          class="flex-1 justify-center"
          href="/sign-up{search}"
          onclick={close}
        >
          Create an account
        </Button>
      </section>
    </section>
  </section>
</Dialog>
