<script>import ProjectIcon from './../../ui/ProjectIcon.svelte';
export let item;
</script>

<ProjectIcon slug={item.slug} size="24" class="icon-5ULJj+" />
<span class="name single-line">{item.name}</span>
<span class="c-waterloo mrg-xs mrg--l">({item.ticker})</span>

<style>
  .name {
    display: block;
  }

  :global(.icon-5ULJj\+) {
    margin-right: 10px;
  }
</style>
