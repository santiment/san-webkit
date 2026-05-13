<script>import ProfilePic from './../../ui/Profile/Pic.svelte';
export let item;
</script>

<ProfilePic src={item.avatarUrl} placeholderSize="24" class="icon-oz49vK" />
<span class="name single-line">
  @{item.username}
</span>

<style>
  .name {
    display: block;
  }

  :global(.icon-oz49vK) {
    --img-size: 24px;
    margin-right: 10px;
  }
</style>
