<script lang="ts">
  import Suggestions from './Suggestions.svelte'

  export let searchTerm = ''

  export const href = ({ id }) => 'https://app.santiment.net/profile/' + id
  export const label = ({ username }) => '@' + username

  let items = [
    { id: 0, username: 'Dima' },
    { id: 0, username: 'Hash' },
    { id: 0, username: 'Test' },
  ]

  function onInput(searchTerm: string) {
    const value = searchTerm.toLowerCase()
  }
</script>

<Suggestions {...$$props} {items} key="id" let:item>
  <span class="name">{item.username}</span>
</Suggestions>

<style>
  .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
