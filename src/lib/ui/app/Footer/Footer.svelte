<script lang="ts">
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { cn } from '$ui/utils/index.js'

  import DigestForm from './DigestForm.svelte'
  import Bottom from './Bottom.svelte'
  import { resourcesLinks } from './links.js'

  type TProps = {
    class?: string
    accent?: 'green' | 'blue'
  }

  const { class: className = '', accent = 'green' }: TProps = $props()
</script>

<footer class={cn('bg-athens px-6', className)} style="--accent: var(--{accent})">
  <div class="mx-auto max-w-[1140px]">
    <div
      class="flex justify-between pb-[53px] pt-[63px] text-base text-waterloo md:flex-wrap md:pb-10 md:pt-14 sm:flex-col"
    >
      <div class="max-w-[124px] column md:max-w-full">
        <a href="https://santiment.net/" class="mb-4" aria-label="Santiment Home">
          <Svg id="santiment" illus w={113} h={22} />
        </a>
        Behavioral analytics for the crypto market
      </div>

      <div
        class="grid grid-flow-col grid-rows-5 gap-x-[70px] gap-y-4 sm:my-10 sm:grid-rows-7 hover:[&>a]:text-[var(--accent)]"
      >
        {#each resourcesLinks as { href, title }}
          <a {href} target="_blank">{title}</a>
        {/each}
      </div>

      <div class="md:mt-7 md:w-full sm:mt-0">
        <div class="flex-1">
          <h4 class="mb-3 font-medium">Subscribe to the weekly Digest!</h4>
          <DigestForm class="mb-6 w-[386px] md:w-full sm:mb-10" label="Subscribe" {accent} />
        </div>
      </div>
    </div>

    <Bottom />
  </div>
</footer>
