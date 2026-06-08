<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { getDialogControllerCtx } from '$ui/core/Dialog/dialogs.js'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'
  import OnlyOnDevice from '$ui/utils/OnlyOnDevice/index.js'
  import { useScreenTransitionCtx } from '$ui/app/ScreenTransition/index.js'
  import { trackEvent } from '$lib/analytics/index.js'

  import { SCREENS } from './state.js'

  let { disabled }: { disabled?: (typeof SCREENS)[number] } = $props()

  const { Controller } = getDialogControllerCtx()
  const { screen, screens } = useScreenTransitionCtx(SCREENS)
</script>

<OnlyOnDevice desktop>
  <div class="flex items-center justify-between border-b px-6 py-4">
    <Svg illus id="santiment-sanbase" w="171" h="20"></Svg>

    <nav class="flex gap-4 fill-waterloo font-medium text-waterloo center">
      {#each screens as item, i (item)}
        {#if i > 0}
          <Svg id="arrow-right" w="5" h="8"></Svg>
        {/if}

        <Button
          class={cn(item === screen.$ && 'text-rhino')}
          disabled={item === disabled}
          onclick={() => {
            trackEvent('pagination', {
              type: 'change_payment_screen',
              value: i,
              label: item.name,
              source: 'payment_form',
            })

            screen.$ = item
          }}
        >
          {item.name}
        </Button>
      {/each}
    </nav>

    <Button
      variant="border"
      onclick={() => {
        trackEvent('press', { action: 'click', type: 'close_dialog', source: 'payment_form' })
        Controller.close()
      }}
    >
      Cancel
    </Button>
  </div>
</OnlyOnDevice>
