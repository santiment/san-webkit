<script lang="ts">
  import ProjectIcon from '$ui/app/ProjectIcon/ProjectIcon.svelte'
</script>

<main class="flex gap-6 p-5">
  <section class="flex flex-col gap-4">
    {@render item('bitcoin')}
    {@render item('ethereum')}
    {@render item('missing')}
  </section>

  <section class="flex flex-col gap-4">
    {@render item('bitcoin', 40)}
    {@render item('ethereum', 40)}
    {@render item('missing', 40)}
  </section>
</main>

{#snippet item(slug: string, size?: number)}
  <div class="flex flex-col gap-2">
    <h3 class="text-lg">{slug} {size ? `(${size}px)` : ''}</h3>
    <ProjectIcon {slug} {size} />
  </div>
{/snippet}
