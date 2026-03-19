<script lang="ts">
  import { onMount } from 'svelte'

  import Button from '$ui/core/Button/Button.svelte'
  import Dialog, { type TDialogProps } from '$ui/core/Dialog/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'
  import { useDeviceCtx } from '$lib/ctx/device/index.js'

  import hedgeweekLogo from './assets/hedgeweekLogo.svg'
  import trophy from './assets/trophy.svg'

  const SOURCE = 'hwawards_vote_dialog'

  const { Controller, onClose }: TDialogProps & { onClose: () => void } = $props()

  const { device } = useDeviceCtx()

  onMount(() => {
    Controller.lock()

    return () => onClose()
  })
</script>

<Dialog
  class={cn(
    'bg-[linear-gradient(112deg,#666B84_-16.09%,#3F4357_12.67%,#181B2B_55.99%)] sm:bg-[linear-gradient(141deg,#666B84_2.57%,#3F4357_23.84%,#181B2B_55.88%)]',
    'w-full max-w-5xl rounded-[34px] bg-mirage text-white md:max-w-[calc(100%-32px)] md:rounded-[10px] md:border md:border-fiord',
  )}
  overlayClass="bg-transparent"
  forceDesktop
>
  <section
    style="--bg-image: url({trophy});"
    class="flex flex-col items-start bg-[image:var(--bg-image)] px-14 py-10 md:bg-none md:px-5 md:py-8"
  >
    <section style:--black="var(--whale)" class="mb-8 flex gap-6 fill-whale">
      <Svg id="santiment" illus w="104" h="20" />

      <img src={hedgeweekLogo} alt="hedgeweek logo" />
    </section>

    <h2 class="mb-5 text-4xl font-semibold sm:text-2xl sm:font-medium">Vote for Santiment!</h2>

    <p class="mb-6 text-lg text-mystic sm:text-base">
      We got 6 nominations in Hedgeweek®<br />
      Global Digital Assets & EU Awards 2026!
    </p>

    <ul class="mb-10 flex flex-col gap-4 rounded-2xl border border-green px-8 py-5 sm:px-6 sm:py-4">
      {@render stepItem('Find Santiment (Ctrl-F or Cmd-F)')}
      {@render stepItem('Enter your name/company to vote')}
    </ul>

    {#snippet stepItem(title: string)}
      <li class="flex gap-3 fill-green text-lg text-athens sm:text-base sm:font-medium">
        <div class="py-1">
          <Svg id="checkmark-circle-filled" w="20" />
        </div>
        <span>{title}</span>
      </li>
    {/snippet}

    <section class="mb-4 flex gap-4">
      <Button
        variant="fill"
        size="lg"
        href="https://hwawards2026.evalato.com/public-evaluation/20305"
        target="_blank"
        data-type="vote_global"
        data-source={SOURCE}
      >
        Vote Global
      </Button>
      <Button
        variant="fill"
        size="lg"
        href="https://hwawards2026.evalato.com/public-evaluation/20301"
        target="_blank"
        data-type="vote_eu"
        data-source={SOURCE}
      >
        Vote EU
      </Button>
    </section>

    <p class="text-base text-mystic sm:text-sm">Thanks for your support! 🥰</p>
  </section>

  <Button
    variant="plain"
    icon="close"
    class="absolute right-8 top-8 fill-mystic sm:right-1 sm:top-1 sm:fill-waterloo"
    iconSize={device.$.isDesktop ? 16 : 12}
    onclick={() => Controller.close(true)}
  />
</Dialog>
