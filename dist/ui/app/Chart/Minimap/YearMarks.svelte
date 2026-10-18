<script>
  // TODO: Optimisation - Render marks using canvas
  // Crypto start - 2009
  const MARKS = [2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024]
</script>

<div
  class="marks pointer-events-none absolute inset-0 z-[1] flex items-end justify-around border bg-transparent text-2xs text-waterloo"
>
  {#each MARKS as mark}
    <span class="mark">{mark}</span>
  {/each}
</div>

<style>
  .mark {
    position: relative;
}
  .mark::before {
    content: '';
    display: block;
    width: 1px;
    position: absolute;
    height: 38px;
    background: var(--porcelain);
    bottom: 0;
    left: 50%;
    z-index: -1;
  }
</style>
