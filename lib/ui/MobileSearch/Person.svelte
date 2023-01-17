<script>import ProfilePic from './../../ui/Profile/Pic.svelte';
export let item;</script>

<ProfilePic src={item.avatarUrl} placeholderWidth="24" class="icon-2u7ry9" />
<span class="name single-line">
  @{item.username}
</span>

<style>
  .name {
    display: block;
  }

  :global(.icon-2u7ry9) {
    --img-size: 24px;
    margin-right: 10px;
  }
</style>
