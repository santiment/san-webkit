<script lang="ts">
  import FollowButton from '$ui/app/FollowButton/index.js'

  const { currentUser, user } = $props()
</script>

<div class="flex h-screen center">
  <FollowButton {currentUser} {user} />
</div>
