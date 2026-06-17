<script lang="ts">
  import type { TCustomer } from '$lib/ctx/customer/api.js'
  import type { ComponentProps } from 'svelte'

  import { cn } from '$ui/utils/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import { trackEvent } from '$lib/analytics/index.js'

  import { checkIsFollowing, startFollowFlow } from './utils.js'

  type TProps = {
    class?: string
    user: { id: string | number }
    currentUser: TCustomer['currentUser']
    source?: string
  } & Omit<ComponentProps<typeof Button>, 'class'>
  let { class: className = '', user, currentUser, source, ...rest }: TProps = $props()

  let isFollowing = $state(checkIsFollowing(currentUser, user.id))

  const postfix = $derived(isFollowing ? 'ing' : '')

  function onFollow() {
    trackEvent('press', {
      action: 'click',
      type: isFollowing ? 'unfollow' : 'follow',
      source,
    })

    if (!currentUser) {
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
    'inline-flex whitespace-nowrap px-3',
    isFollowing && 'bg-athens fill-waterloo text-rhino hover:bg-porcelain',
    className,
  )}
  onclick={onFollow}
  {...rest}
>
  Follow{postfix}
</Button>
