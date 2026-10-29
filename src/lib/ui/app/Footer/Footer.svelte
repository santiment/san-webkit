<script lang="ts">
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { cn } from '$ui/utils/index.js'

  import DigestForm from './DigestForm.svelte'
  import Bottom from './Bottom.svelte'
  import HoldTokensBanner from './HoldTokensBanner.svelte'
  import { resourcesLinks } from './links.js'

  type TProps = {
    class?: string
    style?: string
    appVersion?: string
    withHoldTokensBanner?: boolean
  }

  const {
    class: className = '',
    style = '',
    appVersion,
    withHoldTokensBanner = true,
  }: TProps = $props()
</script>

<footer
  class={cn('bg-athens px-10 sm:bg-white sm:px-6', className)}
  style="--accent: var(--green); --accent-hover: var(--green-hover);{style}"
>
  <div class="mx-auto max-w-[1140px]">
    <div
      class="flex justify-between pt-[63px] pb-[53px] text-base text-fiord sm:flex-col md:flex-wrap md:pt-14 md:pb-10"
    >
      <div class="column max-w-[124px] md:max-w-full">
        <a href="https://santiment.net/" class="mb-4" aria-label="Santiment Home">
          <Svg id="santiment" illus w={113} h={22} />
        </a>

        Behavioral analytics for the crypto market
      </div>

      <div
        class="grid grid-flow-col grid-rows-5 gap-x-[70px] gap-y-4 sm:my-10 sm:grid-rows-8 [&>a]:hover:text-mirage [&>a]:hover:underline"
      >
        {#each resourcesLinks as { href, title, onclick }}
          <a {href} {onclick} target="_blank">{title}</a>
        {/each}
      </div>

      <div class="min-w-[372px] sm:mt-0 sm:min-w-full md:mt-[72px] md:w-full">
        <div class="flex flex-1 flex-col gap-x-8 sm:flex-col md:flex-row md:items-center">
          <div class="mb-6 flex-1 sm:w-full md:mb-0">
            <h4 class="mb-4 font-medium">Subscribe to the monthly Digest!</h4>

            <DigestForm class="max-w-[372px] sm:mb-12 sm:w-full sm:max-w-full" label="Subscribe" />
          </div>

          {#if withHoldTokensBanner}
            <HoldTokensBanner />
          {/if}
        </div>
      </div>
    </div>

    <Bottom {appVersion} />
  </div>
</footer>
