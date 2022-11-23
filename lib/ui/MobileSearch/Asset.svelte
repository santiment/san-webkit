<script>import ProjectIcon from './../../ui/ProjectIcon.svelte';
export let item;</script>

<ProjectIcon slug={item.slug} size="24" class="icon-18XmJZ" />
<span class="name single-line">{item.name}</span>
<span class="c-waterloo mrg-xs mrg--l">({item.ticker})</span>

<style>
  .name {
    display: block;
  }

  :global(.icon-18XmJZ) {
    margin-right: 10px;
  }
</style>
