<script>
  // TODO: Optimisation - Render marks using canvas
  // Crypto start - 2009
  const MARKS = [2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024]
</script>

<div
  class="marks pointer-events-none absolute inset-0 z-1 flex items-end justify-around border bg-transparent text-2xs text-waterloo"
>
  {#each MARKS as mark}
    <span class="mark">{mark}</span>
  {/each}
</div>

<style>/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
.mark{position:relative}.mark:before{content:"";background:var(--porcelain);z-index:-1;width:1px;height:38px;display:block;position:absolute;bottom:0;left:50%}
</style>
