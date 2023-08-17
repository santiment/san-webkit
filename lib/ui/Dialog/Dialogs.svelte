<script>
  import { dialogs } from './'
  import Render from './Render.svelte'
</script>

<div id="dialogs">
  {#each $dialogs as { Component, props }, i}
    <Render {Component} {props} {i} />
  {/each}
</div>

<style>
  div {
    width: 100vw;
  }
</style>
