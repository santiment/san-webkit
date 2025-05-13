<script>import ProjectIcon from './../../ui/ProjectIcon.svelte';
export let item;
</script>

<ProjectIcon slug={item.slug} size="24" class="icon-SpRL_C" />
<span class="name single-line">{item.name}</span>
<span class="c-waterloo mrg-xs mrg--l">({item.ticker})</span>

<style>
  .name {
    display: block;
  }

  :global(.icon-SpRL_C) {
    margin-right: 10px;
  }
</style>
