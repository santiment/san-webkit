<script context="module">
  export { showIntercom } from './../analytics/intercom'
</script>

<script>
  import Svg from './Svg/svelte'

  let className = ''
  export { className as class }
</script>

<button class="btn {className}" on:click>
  <span class="row v-center">
    <Svg id="chat" w="14" h="16" class="chat-zPbp1s mrg-s mrg--b" />
    Help & Feedback
  </span>
</button>

<style>
  button {
    --color: #fff;
    z-index: 1;
  }

  span {
    padding: 12px 6px;
  }

  button,
  span {
    writing-mode: vertical-lr;
  }

  :global(.chat-zPbp1s) {
    transform: rotate(90deg);
  }
</style>
