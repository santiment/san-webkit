<script>
  import Item from './Item.svelte'
  import { notifications$ } from './notifications'
  let parentNode

  $: notifications = [...$notifications$]
</script>

<div bind:this={parentNode}>
  {#each notifications as notification, i (notification.id)}
    <Item {i} {parentNode} {notification} {notifications} offset={notification.offset} />
  {/each}
</div>

<style>
  div {
    z-index: 10000;
    position: fixed;
    bottom: 20px;
    left: 20px;
    display: flex;
    flex-direction: column-reverse;
  }

  :global(.tablet) div,
  :global(.phone) div {
    top: 15px;
    bottom: auto;
    right: 15px;
    justify-content: flex-end;
  }
</style>
