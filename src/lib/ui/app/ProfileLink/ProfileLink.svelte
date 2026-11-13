<script lang="ts">
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import { SANBASE_ORIGIN } from '$lib/utils/links.js'
  import ProfilePicture from '$ui/app/AccountDropdown/ProfilePicture.svelte'
  import Button from '$ui/core/Button/Button.svelte'

  const { currentUser } = useCustomerCtx()
</script>

{#if currentUser.$$}
  <div class="relative flex items-center gap-2 md:gap-3">
    <ProfilePicture as="div" class="min-w-8"></ProfilePicture>

    <div class="flex min-w-0 flex-col single-line md:gap-0.5">
      <Button
        variant="plain"
        href={SANBASE_ORIGIN + '/profile/' + currentUser.$$.id}
        class="t-body-3-medium link-as-bg md:t-body-2-medium"
      >
        @{currentUser.$$.username}
      </Button>

      {#if currentUser.$$.email}
        <p class="t-caption-1-regular text-waterloo single-line md:t-body-3-regular">
          {currentUser.$$.email}
        </p>
      {/if}
    </div>
  </div>
{/if}
