<script lang="ts">
  import Suggestions from './Suggestions.svelte'
  import { searchUserByUsername } from '@/api/ws'
  import ProfilePic from '@/ui/Profile/Pic.svelte'

  export let searchTerm = ''

  export const href = ({ id }) => 'https://app.santiment.net/profile/' + id
  export const label = ({ username }) => '@' + username

  let items = [] as SAN.Author[]

  $: onInput(searchTerm)

  function onInput(searchTerm: string) {
    searchUserByUsername(searchTerm).then((data) => (items = data.slice(0, 5)))
  }
</script>

<Suggestions {...$$props} {items} key="id" let:item>
  <ProfilePic src={item.avatar_url} class="$style.pic mrg-s mrg--r" />
  <span>
    @{item.username}
  </span>
</Suggestions>

<style>
  .pic {
    --img-size: 24px;
  }

  span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
