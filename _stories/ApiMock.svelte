<script>
  import { onDestroy, onMount } from 'svelte'

  export let match
  export let result

  function mock(req, res, ctx) {
    if (req.body.query.includes(match)) {
      return res(ctx.json({ data: result }))
    }
  }

  onMount(() => {
    window.mswApiMock.add(mock)
  })

  onDestroy(() => {
    window.mswApiMock.delete(mock)
  })
</script>

<slot />
