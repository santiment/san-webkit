<script lang="ts">
  import { SANBASE_ORIGIN } from '$lib/utils/links.js'
  import { cn } from '$ui/utils/index.js'

  import Socials from './Socials.svelte'

  type TProps = {
    class?: string
    appVersion?: string
  }

  const { class: className = '', appVersion }: TProps = $props()
</script>

<div
  class={cn(
    'flex justify-between border-t py-6 text-waterloo md:flex-row-reverse sm:flex-col-reverse sm:border-none sm:py-0',
    className,
  )}
>
  <div class="flex md:flex-col-reverse md:text-end sm:mt-10 sm:border-t sm:pt-10 sm:text-center">
    <div
      class="my-auto flex items-center gap-x-3 lg:flex-col lg:items-start md:mt-4 md:flex-row md:items-center md:justify-end sm:mb-14 sm:justify-center xs:flex-col xs:gap-y-3"
    >
      <div>
        © 2016—{new Date().getFullYear()} Santiment
      </div>

      {#if appVersion}
        <div class="h-3 w-[1px] border border-l-waterloo lg:hidden md:block xs:hidden"></div>

        <div>
          Ver. {appVersion}
        </div>
      {/if}
    </div>

    <div
      class="ml-[72px] flex flex-wrap items-center gap-x-9 gap-y-1 md:ml-0 md:justify-end sm:justify-center xs:gap-4 hover:[&>a]:text-mirage hover:[&>a]:underline"
    >
      <a href="https://santiment.net/terms/" target="_blank">Terms</a>
      <a href={`${SANBASE_ORIGIN}/privacy-policy/`} target="_blank">Privacy</a>
      <a
        class="text-nowrap"
        href="https://www.notion.so/santiment/Santiment-Media-ff72838a16164db4b7e90478e18c3776"
        rel="noreferrer"
        target="_blank"
      >
        Media Kit
      </a>
      <a href="https://status.santiment.net/" target="_blank">Status</a>
      <a href="https://academy.santiment.net/changelog/" target="_blank">Changelog</a>
    </div>
  </div>

  <Socials />
</div>
