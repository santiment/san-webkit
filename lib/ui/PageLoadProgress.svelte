<script>export let preloading;

function start(node) {
  setTimeout(() => {
    node.style.transform = 'translateX(-30%)';
  }, 0);
  return {};
}

function end(node) {
  node.classList.add('loaded-iR3sp1');
  return {
    duration: 800
  };
}</script>

<div class="bar">
  {#if $preloading}
    <div class="progress" in:start out:end />
  {/if}
</div>

<style>
  .bar {
    pointer-events: none;
    position: fixed;
    top: -1px;
    left: 0;
    right: 0;
    height: 4px;
    z-index: 999;
  }

  .progress {
    width: 100%;
    height: 100%;
    background: var(--green);
    opacity: 0.8;
    transform: translateX(-100%);
    transition: transform 3s cubic-bezier(0.4, 1, 1, 1);
  }

  :global(.loaded-iR3sp1) {
    transition: transform 400ms cubic-bezier(0, 0, 0.4, 0) !important;
    transform: translateX(0) !important;
    animation: fade 250ms 350ms forwards;
  }

  @keyframes fade {
    0% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
    }
  }
</style>
