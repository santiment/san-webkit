<script>import { dialogs } from './';</script>

<div id="dialogs">
  {#each $dialogs as { Component, props }, i}
    <svelte:component this={Component} {...props} {i} />
  {/each}
</div>

<style>
  div {
    width: 100vw;
  }
</style>
