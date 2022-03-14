<script context="module" lang="ts">
  import { query } from '@/api'

  const QUERY = (id: number | string) => `{
    getUser(selector:{id:${id}}) {
      name
      username
      avatarUrl
    }
  }`

  const accessor = ({ getUser }) => getUser
  export const queryUser = (id: number): Promise<any> => query(QUERY(id)).then(accessor)
</script>

<script lang="ts">
  import type { CreationType } from '@/ui/Profile/types'
  import Info from '@/ui/Profile/Info.svelte'

  export let id: number
  export let currentUser
  export let type: CreationType

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
