<script>
  import { useCustomerCtx } from '../../../ctx/customer/index.svelte.js'
  import { SANBASE_ORIGIN } from '../../../utils/links.js'
  import ProfilePicture from '../AccountDropdown/ProfilePicture.svelte'
  import Button from '../../core/Button/Button.svelte'

  const { currentUser } = useCustomerCtx()
</script>

{#if currentUser.$$}
  <div class="relative flex items-center gap-2 md:gap-3">
    <ProfilePicture as="div" class="min-w-8"></ProfilePicture>

    <div class="flex min-w-0 flex-col single-line md:gap-0.5">
      <Button
        variant="plain"
        size="auto"
        href={SANBASE_ORIGIN + '/profile/' + currentUser.$$.id}
        class="font-medium link-as-bg md:text-base"
      >
        @{currentUser.$$.username}
      </Button>

      {#if currentUser.$$.email}
        <p class="text-xs text-waterloo single-line md:text-sm">
          {currentUser.$$.email}
        </p>
      {/if}
    </div>
  </div>
{/if}
