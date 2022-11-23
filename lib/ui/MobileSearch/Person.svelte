<script>import ProfilePic from './../../ui/Profile/Pic.svelte';
export let item;</script>

<<<<<<< HEAD
<ProfilePic src={item.avatarUrl} placeholderWidth="24" class="icon-2boFPW" />
=======
<ProfilePic src={item.avatarUrl} placeholderWidth="24" class="icon-2mL_Cd" />
>>>>>>> 7a01f87f5ef161038b1901bf4d9fb36cee23e677
<span class="name single-line">
  @{item.username}
</span>

<style>
  .name {
    display: block;
  }

<<<<<<< HEAD
  :global(.icon-2boFPW) {
=======
  :global(.icon-2mL_Cd) {
>>>>>>> 7a01f87f5ef161038b1901bf4d9fb36cee23e677
    --img-size: 24px;
    margin-right: 10px;
  }
</style>
