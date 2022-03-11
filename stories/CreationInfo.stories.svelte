<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import CreationInfo from '@/ui/CreationInfo/svelte'
  import { CreationType } from '@/ui/Profile/types'
</script>

<Meta title="Example/CreationInfo" />

<Story name="CreationInfo">
  <div class="row v-center">
    <CreationInfo
      type={CreationType.Layout}
      title="Creation info title"
      user={{
        id: 113,
        username: 'MyUsername',
      }}
      currentUser={null}
      onEditClick={console.log}
      comments={{
        count: 4,
        active: false,
        onClick: console.log,
      }}
      votes={{
        totalVotes: 5,
        userVotes: 0,
      }}
      onVote={console.log}>
      <svelte:fragment slot="info">Info tooltip here</svelte:fragment>
    </CreationInfo>
  </div>
</Story>
