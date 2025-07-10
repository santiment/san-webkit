<script lang="ts">
  import type { TCustomer } from '$lib/ctx/customer/api.js'

  import { cn } from '$ui/utils/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import { trackEvent } from '$lib/analytics/index.js'

  import { checkIsFollowing, startFollowFlow } from './utils.js'

  type TProps = {
    class?: string
    user: any
    currentUser: TCustomer['currentUser']
    source?: string
  }

  let { class: className = '', user, currentUser, source }: TProps = $props()

  let isFollowing = $state(checkIsFollowing(currentUser, user.id))

  const postfix = $derived(isFollowing ? 'ing' : '')

  function onFollow() {
    if (!currentUser) {
      // return window.dispatchEvent(new CustomEvent(ANON_EVENT))
      return trackEvent('press', {
        action: 'click',
        type: 'anon_follow_click',
        source,
      })
    }

    isFollowing = !isFollowing
    startFollowFlow(currentUser, user.id)

    trackEvent('press', {
      action: 'click',
      type: 'follow_click',
      source,
    })
  }
</script>

<Button
  icon="follow{postfix}"
  iconSize={18}
  iconHeight={16}
  variant="fill"
  class={cn(
    'inline-flex items-center gap-1 whitespace-nowrap rounded px-3 py-1.5 transition-colors hover:fill-white hover:text-white',
    isFollowing ? 'bg-porcelain fill-black text-black hover:bg-mystic' : 'fill-white text-white',
    className,
  )}
  onclick={onFollow}
>
  Follow{postfix}
</Button>
