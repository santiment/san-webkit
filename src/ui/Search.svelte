<script lang="ts">
  import InputWithIcon from '@/ui/InputWithIcon.svelte'

  let className = 'mrg-m mrg--b'
  export { className as class }
  export let autofocus = true
  export let placeholder: string
</script>

<InputWithIcon class={className} {placeholder} {autofocus} icon="search" w="12" on:input />
