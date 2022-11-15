<script lang="ts">
  import ProfilePic from '@/ui/Profile/Pic.svelte'
  import Suggestions from './Suggestions.svelte'
  import { queryPeople } from './api'

  export let searchTerm
  export let filter

  let loading = true
  let people = [] as any[]
  let items = people

  if (process.browser) {
    queryPeople().then((data) => {
      people = data
      loading = false
    })
  }

  $: people, onInput(searchTerm)

  function onInput(searchTerm: string) {
    const value = searchTerm.toLowerCase()
    items = people.filter(({ username }) => username.toLowerCase().includes(value))
  }
</script>

<Suggestions {items} {loading} {filter} let:item onItemClick={window.__onLinkClick}>
  <ProfilePic src={item.avatar_url} placeholderWidth="24" class="$style.icon" />
  <span class="name single-line">
    @{item.username}
  </span>
</Suggestions>

<style>
  .name {
    display: block;
  }

  .icon {
    --img-size: 24px;
    margin-right: 10px;
  }
</style>
