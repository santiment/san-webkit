<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import CreationInfo from '@/ui/CreationInfo/index.svelte'
  import { CreationType } from '@/ui/Profile/types'
</script>

<Meta title="Example/CreationInfo" />

<Story name="CreationInfo">
  <div class="row v-center">
    <CreationInfo
      type={CreationType.Layout}
      user={{
        id: 113,
        username: 'MyUsername',
      }}
      title="Creation info title"
      onEditClick={console.log}
      comments={{
        onClick: console.log,
      }} />
  </div>
</Story>
