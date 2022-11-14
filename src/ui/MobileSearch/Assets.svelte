<script lang="ts">
  import { queryProjects } from '@/api/projects'
  import ProjectIcon from '@/ui/ProjectIcon.svelte'
  import Suggestions from './Suggestions.svelte'

  export let searchTerm
  export let filter

  let loading = true
  let projects = [] as any[]
  let items = projects

  if (process.browser) {
    queryProjects().then((data) => {
      projects = data
      loading = false
    })
  }

  $: projects, onInput(searchTerm)

  function onInput(searchTerm: string) {
    const value = searchTerm.toLowerCase()
    items = projects.filter(({ name, ticker }) => {
      return name.toLowerCase().includes(value) || ticker.toLowerCase().includes(value)
    })
  }
</script>

<Suggestions {items} {loading} {filter} let:item onItemClick={window.__onLinkClick}>
  <ProjectIcon slug={item.slug} size="24" class="$style.icon" />
  <span class="name single-line line-clamp">{item.name}</span>
  <span class="c-waterloo mrg-xs mrg--l">({item.ticker})</span>
</Suggestions>

<style>
  .name {
    display: block;
  }

  .icon {
    margin-right: 10px;
  }
</style>
