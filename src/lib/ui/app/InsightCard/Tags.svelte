<script lang="ts">
  import Tag from './Tag.svelte'

  const { items } = $props()
</script>

<div class="gap-1.5 row">
  {#each items as { name }}
    <Tag {name} />
  {/each}
</div>
