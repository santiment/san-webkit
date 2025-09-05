<script lang="ts">
  import { ss } from '../../../../../utils/index.js'
  import { cn } from '../../../../utils/index.js'
  import Button from '../../../../core/Button/index.js'
  import Textarea from '../../../../core/Input/Textarea.svelte'
  import { useDeviceCtx } from '../../../../../ctx/device/index.svelte.js'

  type TProps = {
    value: string
    loading?: boolean
    placeholder?: string
    icon?: string | null
    class?: string
    onSubmit: VoidFunction
  }

  const { device } = useDeviceCtx()
  let {
    value = $bindable(),
    icon: initialIcon = 'turtoshi',
    loading = false,
    placeholder = '',
    class: className = '',
    onSubmit,
  }: TProps = $props()

  const textareaRef = ss<null | HTMLTextAreaElement>(null)

  const isPhone = $derived(device.$.isPhone)
  const icon = $derived(initialIcon === null ? undefined : initialIcon)

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

    if (!textareaRef.$ || isPhone) return

    textareaRef.$.style.height = 'auto'
    textareaRef.$.style.height = `${textareaRef.$.scrollHeight}px`
  }
</script>

<label class={cn('relative mt-3 flex items-center', className)}>
  <Textarea
    ref={textareaRef}
    icon={isPhone ? undefined : icon}
    iconSize={24}
    {placeholder}
    {value}
    class={cn(
      'qa-academy-border-gradient',
      'flex-1 items-center overflow-hidden overscroll-auto rounded-lg pr-14',
      'border-2 border-transparent py-5 focus-within:border-transparent hover:border-transparent',
      'bg-white placeholder-casper outline-none focus-within:fill-waterloo [&>svg]:bottom-5',
      'sm:h-[88px] sm:items-start sm:px-3 sm:py-2 sm:pr-[50px]',
    )}
    inputClass={cn(
      'resize-none py-0 pr-0 pl-12 sm:pl-0 sm:h-full max-h-[72px] text-base',
      !initialIcon && 'pl-4',
    )}
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
        'sm:bottom-1.5 sm:right-1.5 sm:translate-y-0',
      )}
      onclick={handleSubmit}
      disabled={loading}
    />
  {/if}
</label>

<style>
  :global(.qa-academy-border-gradient) {
    background:
      linear-gradient(white, white) padding-box,
      linear-gradient(to right, #b0ebdb, #ffe7ca) border-box;
  }
</style>
