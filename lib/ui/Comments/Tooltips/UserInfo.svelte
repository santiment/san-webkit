<script context="module">
  import { query } from './../../../api'

  const QUERY = (id) => `{
    getUser(selector:{id:${id}}) {
      name
      username
      avatarUrl
    }
  }`

  const accessor = ({ getUser }) => getUser

  export const queryUser = (id) => query(QUERY(id)).then(accessor)
</script>

<script lang="ts">
  import Info from './../../../ui/Profile/Info.svelte'
  export let id
  export let currentUser
  export let type
  let user = null

  $: queryUser(id).then(setUser)

  function setUser(data) {
    data.id = id
    user = data
  }
</script>

{#if user}
  <div>
    <Info {user} {currentUser} {type} />
  </div>
{/if}

<style>
  div {
    font-style: initial;
    font-weight: initial;
  }
</style>
