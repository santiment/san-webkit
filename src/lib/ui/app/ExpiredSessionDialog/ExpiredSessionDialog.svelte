<script module lang="ts">
  import Component from './ExpiredSessionDialog.svelte'

  export const showExpiredSessionDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import Button from '$ui/core/Button/index.js'

  let { Controller }: TDialogProps = $props()
</script>

<Dialog class="w-full max-w-[600px] px-[92px] py-12 text-center md:max-w-full">
  <Svg illus id="hourglass" h={182} w={190} class="mx-auto mb-6"></Svg>
  <h3 class="text-2xl font-medium text-rhino">Your session has expired</h3>
  <p class="mb-8 text-base text-waterloo">
    Your session has expired. Please sign in again to view your saved creations and continue your
    experience
  </p>
  <footer class="flex justify-center gap-4">
    <Button variant="fill" class="h-10 w-36 text-base center" href="/sign-in">Sign in</Button>
    <Button variant="border" class="h-10 w-36 text-base center" onclick={() => Controller.close()}
      >No, thanks</Button
    >
  </footer>
</Dialog>
