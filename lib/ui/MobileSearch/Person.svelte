<script>import ProfilePic from './../../ui/Profile/Pic.svelte';
export let item;</script>

<ProfilePic src={item.avatarUrl} placeholderWidth="24" class="icon-2mL_Cd" />
<span class="name single-line">
  @{item.username}
</span>

<style>
  .name {
    display: block;
  }

  :global(.icon-2mL_Cd) {
    --img-size: 24px;
    margin-right: 10px;
  }
</style>
