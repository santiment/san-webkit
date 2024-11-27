<script lang="ts">
  import { SANBASE_ORIGIN } from '$lib/utils/links.js'

  import Socials from './Socials.svelte'
</script>

<div
  class="flex justify-between border-t py-6 text-casper md:flex-row-reverse sm:flex-col-reverse sm:border-none sm:py-0"
>
  <div
    class="flex flex-grow md:flex-col-reverse md:text-end sm:mt-10 sm:border-t sm:pt-10 sm:text-center"
  >
    <div class="flex-grow sm:mb-14 sm:mt-4">
      © 2016—{new Date().getFullYear()} Santiment
    </div>

    <div
      class="ml-[72px] flex flex-grow gap-9 md:ml-0 md:justify-end sm:justify-center hover:[&>a]:text-green"
    >
      <a href="https://santiment.net/terms/" target="_blank">Terms</a>
      <a href={`${SANBASE_ORIGIN}/privacy-policy`} target="_blank">Privacy</a>
      <a
        href="https://www.notion.so/santiment/Santiment-Media-ff72838a16164db4b7e90478e18c3776"
        rel="noreferrer"
        target="_blank"
      >
        Media Kit
      </a>
    </div>
  </div>

  <div class="flex-grow">
    <Socials />
  </div>
</div>
