<script lang="ts">
  import ProjectIcon from '@/ui/ProjectIcon.svelte'
  import { getHorizontalCorrection } from '@/ui/Tooltip/utils'
  import { queryProjects } from '@/api/projects'

  export let position: { x: number; y: number; bottom: number }
  export let onSelect
  export let searchTerm = ''
  export let node = undefined

  let projects = [] as any[]

  queryProjects().then((data) => (projects = data))

  $: filtered = projects.slice(0, 5)
  $: onInput(searchTerm)
  $: style = node && getPositionStyles(position)

  function onInput(searchTerm: string) {
    const value = searchTerm.toLowerCase()
    filtered = projects
      .filter(({ name, ticker }) => {
        return name.toLowerCase().includes(value) || ticker.toLowerCase().includes(value)
      })
      .slice(0, 5)
  }

  function getPositionStyles({ x, y, bottom }): string {
    const { offsetWidth, offsetHeight } = node as any as HTMLElement
    const { innerHeight } = window

    const isBottom = bottom + offsetHeight + 40 > innerHeight

    const yPosition = isBottom
      ? `bottom:${innerHeight - y + 5 - window.scrollY}`
      : `top:${bottom + window.scrollY}`
    const xPosition = x + getHorizontalCorrection(offsetWidth, x)

    return `${yPosition}px;left:${xPosition}px`
  }
</script>

<div class="border box" {style} bind:this={node}>
  {#each filtered.slice(0, 5) as project (project.slug)}
    {@const { slug, name, ticker } = project}
    <button class="btn-ghost fluid row v-center" on:click|capture={() => onSelect(project)}>
      <ProjectIcon {slug} class="mrg-s mrg--r" />
      <span class="name">{name}</span>
      <span class="c-waterloo mrg-xs mrg--l">{ticker}</span>
    </button>
  {:else}
    {projects.length ? 'No results' : 'Loading...'}
  {/each}
</div>

<style>
  div {
    position: absolute;
    padding: 8px;
    max-width: 220px;
    width: 220px;
    white-space: nowrap;
    z-index: 100;
  }

  .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
