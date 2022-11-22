<script lang="ts">
  import ProfilePic from '@/ui/Profile/Pic.svelte'

  export let item
</script>

<ProfilePic src={item.avatarUrl} placeholderWidth="24" class="$style.icon" />
<span class="name single-line">
  @{item.username}
</span>

<style>
  .name {
    display: block;
  }

  .icon {
    --img-size: 24px;
    margin-right: 10px;
  }
</style>
