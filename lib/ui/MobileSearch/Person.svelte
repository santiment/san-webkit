<script>import ProfilePic from './../../ui/Profile/Pic.svelte';
export let item;
</script>

<ProfilePic src={item.avatarUrl} placeholderSize="24" class="icon-3+RBOG" />
<span class="name single-line">
  @{item.username}
</span>

<style>
  .name {
    display: block;
  }

  :global(.icon-3\+RBOG) {
    --img-size: 24px;
    margin-right: 10px;
  }
</style>
