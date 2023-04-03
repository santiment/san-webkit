<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import VirtualList from '@/ui/VirtualList/index.svelte'
  import { projects } from '../allProjects'
  import ProjectIcon from '@/ui/ProjectIcon.svelte'
</script>

<Meta title="Example/VirtualList" component={VirtualList} />

<Story name="VirtualList">
  <div class="list border">
    <VirtualList itemHeight={32} items={projects} key="slug" let:item>
      <div class="btn-ghost row v-center">
        <ProjectIcon slug={item.slug} class="mrg-s mrg--r" />
        {item.name}
        ({item.ticker})
      </div>
    </VirtualList>
  </div>
</Story>

<style>
  .list {
    padding: 8px;
    width: 400px;
    height: 250px;
  }
</style>
