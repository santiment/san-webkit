<script>import ProfilePic from './../../ui/Profile/Pic.svelte';
export let item;
</script>

<ProfilePic src={item.avatarUrl} placeholderSize="24" class="icon-9ed8VI" />
<span class="name single-line">
  @{item.username}
</span>

<style>
  .name {
    display: block;
  }

  :global(.icon-9ed8VI) {
    --img-size: 24px;
    margin-right: 10px;
  }
</style>
