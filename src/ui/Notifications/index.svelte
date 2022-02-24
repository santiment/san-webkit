<script>
  import Item from './Item.svelte'
  import { notifications as store } from './notifications'

  let parentNode
  $: notifications = [...$store]
</script>

<div bind:this={parentNode}>
  {#each notifications as notification, i (notification.id)}
    <Item {i} {parentNode} {notification} {notifications} offset={notification.offset} />
  {/each}
</div>

<style lang="scss">
  div {
    z-index: 10000;
    position: fixed;
    bottom: 20px;
    left: 20px;
    display: flex;
    flex-direction: column-reverse;
  }

  :global(.tablet),
  :global(.phone) {
    div {
      top: 15px;
      bottom: auto;
      right: 15px;
      justify-content: flex-end;
    }
  }
</style>
