<script lang="ts">
  import { getAllContexts, onMount } from 'svelte'

  import Button from '$ui/core/Button/index.js'

  type TProps = any
  let props: TProps = $props()

  let count = $state(0)

  $inspect(props)

  onMount(() => {
    console.log('onMount from Alerts')
    console.log(getAllContexts())
  })
</script>

<div class="border">
  Hello from alerts!

  <Button
    onclick={() => {
      count += 1
    }}
  >
    Press to count = {count}
  </Button>
</div>
