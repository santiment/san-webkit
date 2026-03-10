<script lang="ts">
  import type { TCustomer } from '../../../ctx/customer/api.js'

  import { cn } from '../../utils/index.js'
  import Button from '../../core/Button/Button.svelte'
  import { trackEvent } from '../../../analytics/index.js'

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
    trackEvent('press', {
      action: 'click',
      type: isFollowing ? 'unfollow' : 'follow',
      source,
    })

    if (!currentUser) {
      // return window.dispatchEvent(new CustomEvent(ANON_EVENT))
      return
    }

    isFollowing = !isFollowing
    startFollowFlow(currentUser, user.id)
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
