<script>
  export let rect
  $: ({ x, y, width, height } = rect)
</script>

<svg>
  <defs>
    <mask id="walkthrough">
      <rect class="rect" fill="white" />
      <rect x={x - 7} y={y - 7} width={width + 14} height={height + 14} fill="black" rx="4" />
    </mask>
  </defs>

  <rect fill="black" mask="url(#walkthrough)" class="rect" />
</svg>

<style>
  svg {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;
    pointer-events: none;
  }
  svg,
  mask,
  .rect {
    width: 100%;
    height: 100%;
  }
</style>
