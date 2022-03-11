<script lang="ts">
  import { onDestroy } from 'svelte'
  import Svg from '@/ui/Svg/svelte'

  export let isEditVisible = false
  export let onClick

  let width = 0
  let timer
  let node
  let trigger

  $: node && trigger && trigger.after(node)

  export function showEdit({ currentTarget }) {
    trigger = currentTarget
    timer = setTimeout(() => (isEditVisible = true), 100)
    width = currentTarget.clientWidth
  }
  export function hideEdit() {
    clearTimeout(timer)
    isEditVisible = false
  }

  onDestroy(() => clearTimeout(timer))
</script>

{#if isEditVisible}
  <div
    bind:this={node}
    class="edit mrg-s mrg--l"
    style="--width:{width}px"
    on:mouseleave={hideEdit}
    on:click={onClick}>
    <div class="btn-3">
      <Svg id="pencil" w="16" />
    </div>
  </div>
{/if}

<style>
  .edit {
    position: relative;
  }
  .edit::before {
    content: '';
    position: absolute;
    width: calc(var(--width) + 40px);
    height: 25px;
    top: 2px;
    right: 0;
    cursor: pointer;
  }
  .btn-3 {
    --color: var(--waterloo);
    z-index: 2;
    position: relative;
  }
</style>
