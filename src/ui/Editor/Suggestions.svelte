<script lang="ts">
  import { projects } from '../../../stories/allProjects'
  import ProjectIcon from '@/ui/ProjectIcon.svelte'

  export let position: { x: number; y: number; height: number }
  export let onSelect
  export let searchTerm = ''
  export let node = undefined

  let filtered = projects.slice(0, 5)

  $: ({ x, y, height } = position)
  $: style = `top:${y + height}px;left:${x}px`
  $: onInput(searchTerm)

  function onInput(searchTerm) {
    const value = searchTerm.toLowerCase()
    filtered = projects.filter(({name, ticker})=> {
      return name.toLowerCase().includes(value) || ticker.toLowerCase().includes(value)
    }).slice(0,5)
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
    No results
  {/each}
</div>

<style>
  div {
    position: absolute;
    padding: 8px;
    max-width: 220px;
    width: 220px;
  }

  .name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
