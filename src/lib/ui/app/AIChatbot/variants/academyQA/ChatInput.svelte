<script lang="ts">
  import { ss } from 'svelte-runes'

  import { cn } from '$ui/utils/index.js'
  import Button from '$ui/core/Button/index.js'
  import Textarea from '$ui/core/Input/Textarea.svelte'

  type TProps = {
    value: string
    loading?: boolean
    placeholder?: string
    onSubmit: VoidFunction
  }

  let { value = $bindable(), loading = false, placeholder = '', onSubmit }: TProps = $props()

  const textareaRef = ss<null | HTMLTextAreaElement>(null)

  function handleSubmit() {
    if (!value?.trim() || loading) return

    onSubmit()

    if (!textareaRef.$) return

    textareaRef.$.style.height = 'auto'
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
      if (!textareaRef.$) return

      textareaRef.$.style.height = 'auto'
    }
  }

  function handleInput(e: Event & { currentTarget: HTMLTextAreaElement }) {
    const textarea = e.currentTarget
    value = textarea.value

    if (!textareaRef.$) return

    textareaRef.$.style.height = 'auto'
    textareaRef.$.style.height = `${textareaRef.$.scrollHeight}px`
  }
</script>

<label class="relative mt-3 flex items-center">
  <Textarea
    ref={textareaRef}
    icon="turtoshi"
    iconSize={24}
    class={cn(
      'flex-1 items-center overflow-hidden overscroll-auto rounded-lg pr-14',
      'bg-transparent placeholder-casper outline-none focus-within:fill-waterloo',
      '-[&>svg]:z-[1] py-5 [&>svg]:bottom-5',
    )}
    inputClass="max-h-[72px] resize-none py-0 pr-0 pl-12"
    {placeholder}
    {value}
    rows={1}
    onclick={() => textareaRef.$?.focus()}
    oninput={handleInput}
    onkeydown={onKeydown}
  />

  {#if value.length || loading}
    <Button
      icon="back-to-top"
      class={cn(
        'absolute right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full',
        'border border-green fill-green hover:bg-green hover:fill-white',
        'active:border-green-hover active:bg-green-hover',
      )}
      onclick={handleSubmit}
      disabled={loading}
    />
  {/if}
</label>
