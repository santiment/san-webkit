<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import VirtualList from '@/ui/VirtualList/Searchable.svelte'
  import ProjectIcon from '@/ui/ProjectIcon.svelte'
  import { projects } from './allProjects'

  function filter(searchTerm, items) {
    const value = searchTerm.toLowerCase()
    return items.filter(({ name }) => name.toLowerCase().includes(value))
  }
</script>

<Meta title="Example/List Of Projects" component={VirtualList} />

<Template let:args>
  <div class="list border ">
    <VirtualList
      class="$style.items"
      items={projects}
      {filter}
      key="slug"
      placeholder="Search assets"
      maxHeight={200}
      let:item>
      <div class="row v-center btn-ghost">
        <ProjectIcon slug={item.slug} class="mrg-s mrg--r" />
        {item.name}
      </div>
    </VirtualList>
  </div>
</Template>

<Story name="Example/List Of Projects" />

<style>
  .list {
    width: 400px;
    padding: 8px;
  }
</style>
