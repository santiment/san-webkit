<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { getAllContexts, onMount } from 'svelte'

  let props = $props()

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
    }}>Press to count = {count}</Button
  >
</div>
