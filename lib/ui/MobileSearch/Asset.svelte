<script>import ProjectIcon from './../../ui/ProjectIcon.svelte';
export let item;</script>

<<<<<<< HEAD
<ProjectIcon slug={item.slug} size="24" class="icon-1yRQVC" />
=======
<ProjectIcon slug={item.slug} size="24" class="icon-2mXLB_" />
>>>>>>> 7a01f87f5ef161038b1901bf4d9fb36cee23e677
<span class="name single-line">{item.name}</span>
<span class="c-waterloo mrg-xs mrg--l">({item.ticker})</span>

<style>
  .name {
    display: block;
  }

<<<<<<< HEAD
  :global(.icon-1yRQVC) {
=======
  :global(.icon-2mXLB_) {
>>>>>>> 7a01f87f5ef161038b1901bf4d9fb36cee23e677
    margin-right: 10px;
  }
</style>
