<script context="module">
  export { showIntercom } from '@/analytics/intercom'
</script>

<script>
  import Svg from './Svg/svelte'

  let className = ''
  export { className as class }
</script>

<button class="btn {className}" on:click>
  <span class="row v-center">
    <Svg id="chat" w="14" h="16" class="$style.chat mrg-s mrg--b" />
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
    writing-mode: vertical-lr;
  }

  .chat {
    transform: rotate(90deg);
  }
</style>
