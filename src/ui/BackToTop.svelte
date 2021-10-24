<script>
  import ViewportObserver from './ViewportObserver.svelte'

  let className = ''
  export { className as class }
  export let options = {
    rootMargin: '0px 0px -100px',
  }

  let hidden = true

  const onIntersect = () => (hidden = true)
  const onLeaving = () => (hidden = false)
</script>

<ViewportObserver {options} on:intersect={onIntersect} on:leaving={onLeaving}>
  <div
    class="btn {className}"
    class:hidden
    on:click={() => window.scrollTo(0, 0)}
    style="--img:url({process.env.MEDIA_PATH}/icons/back-to-top.svg)"
  />
</ViewportObserver>

<style>
  div {
    background: var(--img) no-repeat 50%, var(--bg);
    border-radius: 50%;
    position: fixed;
    width: 48px;
    height: 48px;
    left: 48px;
    bottom: 48px;
    transition: opacity 200ms;
  }
  .hidden {
    opacity: 0;
  }
</style>
