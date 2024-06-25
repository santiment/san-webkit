<script>import ProjectIcon from './../../ui/ProjectIcon.svelte';
export let item;
</script>

<ProjectIcon slug={item.slug} size="24" class="icon-fgr09N" />
<span class="name single-line">{item.name}</span>
<span class="c-waterloo mrg-xs mrg--l">({item.ticker})</span>

<style>
  .name {
    display: block;
  }

  :global(.icon-fgr09N) {
    margin-right: 10px;
  }
</style>
