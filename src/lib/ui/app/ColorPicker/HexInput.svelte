<script lang="ts">
  import Input from '$ui/core/Input/Input.svelte'
  import { cn } from '$ui/utils/index.js'

  type TProps = { color: string; onChange: (color: string) => void }
  let { color, onChange }: TProps = $props()

  let error = $state(false)

  const checkIsInvalidHex = (char: string) => Number.isNaN(parseInt(char, 16))

  const getValues = (input: string) => (input.startsWith('#') ? input.slice(1) : input)

  const normalizeHexValues = (values: string) =>
    '#' + (values.length === 3 ? normalizeHexShorthand(values) : values)

  function normalizeHexShorthand(values: string) {
    let normalized = ''
    for (let i = values.length - 1; i > -1; i--) {
      const char = values[i]
      normalized = char + char + normalized
    }
    return normalized
  }

  function checkIsInvalidHexValues(values: string) {
    for (let i = values.length - 1; i > -1; i--) {
      if (checkIsInvalidHex(values[i])) return true
    }
    return false
  }

  function onBlur(e: FocusEvent) {
    const values = getValues((e.currentTarget as HTMLInputElement).value)

    if (checkIsInvalidColorInput(values)) return

    onChange(normalizeHexValues(values))
  }

  function checkIsInvalidColorInput(values: string) {
    const { length } = values

    return (length !== 3 && length !== 6 && length !== 8) || checkIsInvalidHexValues(values)
  }

  function onInput(e: Event & { currentTarget: HTMLInputElement }): void {
    const values = getValues((e.currentTarget as HTMLInputElement).value)

    if (checkIsInvalidColorInput(values)) {
      error = true
      return
    }

    // wasChanged = true
    error = false
    onChange(normalizeHexValues(values))
  }

  function onKeyDown(e: KeyboardEvent) {
    const { key, ctrlKey, metaKey } = e

    if (key === 'v' && (ctrlKey || metaKey)) return
    if (checkIsInvalidHex(key)) return e.preventDefault()
  }

  $inspect(error)
</script>

<Input
  class={cn('mb-2', error && '!border-red')}
  type="text"
  defaultValue={color}
  onblur={onBlur}
  oninput={onInput}
  onkeydown={onKeyDown}
></Input>
