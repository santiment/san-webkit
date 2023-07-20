<script lang="ts">
  import InputWithIcon from '@/ui/InputWithIcon.svelte'

  let className = 'mrg-m mrg--b'
  export { className as class }
  export let autofocus = null as boolean | null
  export let placeholder: string
  export let value = undefined as string | undefined
  export let big = false
  export let iconSize = 12
</script>

<InputWithIcon
  class={className}
  {big}
  {value}
  {placeholder}
  {autofocus}
  icon="search"
  w={iconSize}
  on:input
  on:keydown
  on:keyup
  on:focus
  on:blur
>
  <slot />
</InputWithIcon>
