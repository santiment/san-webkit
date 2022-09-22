<script context="module">export { showIntercom } from './../analytics/intercom';</script>

<script>import Svg from './Svg/svelte';
let className = '';
export { className as class };</script>

<div class="btn row v-center {className}" on:click>
  <Svg id="chat" w="14" h="16" class="chat-1o1nIT mrg-s mrg--b" />
  Help & Feedback
</div>

<style>
  div {
    --color: #fff;
    writing-mode: vertical-lr;
    padding: 12px 6px;
    z-index: 1;
  }
  :global(.chat-1o1nIT) {
    transform: rotate(90deg);
  }
</style>
