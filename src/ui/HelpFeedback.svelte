<script context="module">
  export function showIntercom() {
    if (window.Intercom) window.Intercom('show')
  }
</script>

<script>
  import Svg from './Svg.svelte'

  let className = ''
  export { className as class }
</script>

<div class="btn row v-center {className}" on:click>
  <Svg id="chat" w="14" h="16" class="$style.chat mrg-s mrg--b" />
  Help & Feedback
</div>

<style>
  div {
    --color: var(--white);
    writing-mode: vertical-lr;
    padding: 12px 6px;
  }
  .chat {
    transform: rotate(90deg);
  }
</style>
