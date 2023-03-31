<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { projects } from './allProjects'
  import ListOfAssets from '@/ui/ListOfAssets/index.svelte'
  import ListOfAssetsMulti from '@/ui/ListOfAssets/Multi.svelte'
</script>

<Meta title="Example/List Of Projects" component={ListOfAssets} />

<!-- <Template let:args> -->
<!-- <div class="list border "> -->
<!--   <VirtualList -->
<!--     class="$style.items" -->
<!--     items={projects} -->
<!--     {filter} -->
<!--     key="slug" -->
<!--     placeholder="Search assets" -->
<!--     maxHeight={200} -->
<!--     let:item> -->
<!--     <div class="row v-center btn-ghost"> -->
<!--       <ProjectIcon slug={item.slug} class="mrg-s mrg--r" /> -->
<!--       {item.name} -->
<!--     </div> -->
<!--   </VirtualList> -->
<!-- </div> -->
<!-- </Template> -->

<Story name="Example/List Of Projects">
  <div class="list border">
    <ListOfAssets items={projects} onSelect={console.log} />
  </div>
</Story>

<Story name="Example/List Of Projects">
  <div class="list border">
    <ListOfAssetsMulti items={projects} onSelect={console.log} />
  </div>
</Story>

<style>
  .list {
    width: 400px;
    margin: 20px;
    padding: 20px;
    height: 500px;
  }
</style>
