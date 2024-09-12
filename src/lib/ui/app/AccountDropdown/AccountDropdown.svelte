<script lang="ts">
  import Tooltip from '$ui/core/Tooltip/index.js'
  import { cn } from '$ui/utils/index.js'
  import ProfilePicture from './ProfilePicture.svelte'
</script>

<Tooltip>
  {#snippet children({ ref })}
    <ProfilePicture {ref}></ProfilePicture>
  {/snippet}
</Tooltip>
