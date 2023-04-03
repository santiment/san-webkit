<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import ListOfAssets from '@/ui/ListOfAssets/index.svelte'
  import ListOfAssetsMulti from '@/ui/ListOfAssets/Multi.svelte'
</script>

<Meta title="Example/List Of Projects" component={ListOfAssets} />

<Story name="Example/List Of Projects">
  <div class="list border">
    <ListOfAssets onSelect={console.log} />
  </div>

  <div class="list border">
    <ListOfAssetsMulti onSelect={console.log} />
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
