<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import CreationInfo from '@/ui/CreationInfo/svelte'
  import { CreationType } from '@/ui/Profile/types'
</script>

<Meta title="Example/CreationInfo" />

<Story name="CreationInfo" args={{ isLoggedIn: true }} let:args>
  <div class="row v-center" style="margin: 40px">
    <CreationInfo
      id={10}
      type={CreationType.Watchlist}
      title="Creation info title"
      user={{
        id: 113,
        username: 'MyUsername',
      }}
      currentUser={args.isLoggedIn
        ? {
            id: 1,
          }
        : null}
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
      onVote={console.log}
    >
      <svelte:fragment slot="info">Info tooltip here</svelte:fragment>
    </CreationInfo>
  </div>
</Story>
