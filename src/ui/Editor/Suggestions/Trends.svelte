<script lang="ts">
  import Suggestions from './Suggestions.svelte'

  export let searchTerm = ''

  export const href = () => 'https://app.santiment.net/labs/trends/explore/' + searchTerm
  export const label = () => '#' + searchTerm

  let items = [0]
</script>

<Suggestions {...$$props} {items}>
  <span class="name">Link trend</span>
</Suggestions>
