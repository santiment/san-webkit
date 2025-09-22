<script lang="ts">
  import { debounceTime, map, of, pipe, switchMap, tap } from 'rxjs'

  import { ss, useObserveFnCall } from '$lib/utils/index.js'
  import { cn } from '$ui/utils/index.js'
  import Button from '$ui/core/Button/index.js'
  import Textarea from '$ui/core/Input/Textarea.svelte'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import Popover from '$ui/core/Popover/Popover.svelte'

  import { queryAcademyAutocompleteQuestions } from '../../api.js'

  type TProps = {
    loading?: boolean
    placeholder?: string
    icon?: string | null
    class?: string
    onSubmit: (query: string) => void
  }

  const { device } = useDeviceCtx()
  let {
    icon: initialIcon = 'turtoshi',
    loading = $bindable(false),
    placeholder = '',
    class: className = '',
    onSubmit,
  }: TProps = $props()

  const textareaRef = ss<null | HTMLTextAreaElement>(null)
  const contentRef = ss<null | HTMLElement>(null)
  let textareaWrapperRef = ss<null | HTMLElement>(null)

  let value = $state('')
  let isPopoverOpened = $state(false)
  let predictions = $state<{ question: string; title: string }[]>([])

  const isMobile = $derived(device.$.isMobile)
  const icon = $derived(initialIcon === null ? undefined : initialIcon)

  function handleSubmit(query: string) {
    const trimmedQuery = query.trim()
    if (!trimmedQuery || loading) return

    onSubmit(trimmedQuery)

    value = ''
    predictions = []
    isPopoverOpened = false

    if (textareaRef.$) {
      textareaRef.$.style.height = 'auto'
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(value)
    }
  }

  function resizeTextarea() {
    if (!textareaRef.$ || isMobile) return

    textareaRef.$.style.height = 'auto'
    textareaRef.$.style.height = `${textareaRef.$.scrollHeight}px`
  }

  const runAutocompleteSearch = useObserveFnCall<string>(() =>
    pipe(
      debounceTime(500),
      map((query) => query.trim()),
      switchMap((trimmedQuery) => {
        if (trimmedQuery.length < 3) {
          return of([])
        }

        return queryAcademyAutocompleteQuestions()(trimmedQuery)
      }),
      tap((rawQuestions) => {
        predictions = rawQuestions
        isPopoverOpened = rawQuestions.length > 0
      }),
    ),
  )

  function handleFocus() {
    if (predictions.length > 0) {
      isPopoverOpened = true
    }
  }

  function handleBlur(e: FocusEvent) {
    if (!contentRef.$?.contains(e.relatedTarget as HTMLInputElement)) {
      isPopoverOpened = false
    }
  }

  function handleInput(e: Event) {
    const newValue = (e.currentTarget as HTMLTextAreaElement).value

    value = newValue
    resizeTextarea()

    runAutocompleteSearch(newValue)
  }
</script>

<Popover
  bind:isOpened={isPopoverOpened}
  align="start"
  side="top"
  noStyles
  contentProps={{
    customAnchor: textareaWrapperRef.$,
    alignOffset: 0,
    sideOffset: 8,
    trapFocus: false,
    avoidCollisions: true,
    onInteractOutside: () => (isPopoverOpened = false),
  }}
>
  {#snippet children()}
    <label
      bind:this={textareaWrapperRef.$}
      class={cn('relative mt-3 flex items-center', className)}
    >
      <Textarea
        ref={textareaRef}
        icon={isMobile ? undefined : icon}
        iconSize={24}
        {placeholder}
        {value}
        class={cn(
          'qa-academy-border-gradient',
          'flex-1 items-center overflow-hidden overscroll-auto rounded-lg pr-14',
          'border-2 border-transparent py-5 focus-within:border-transparent hover:border-transparent',
          'bg-white placeholder-casper outline-none focus-within:fill-waterloo [&>svg]:bottom-5 [&>svg]:fill-rhino',
          'sm:!h-[88px] sm:!items-start sm:!px-3 sm:!py-2 sm:!pr-[50px]',
        )}
        inputClass={cn(
          'resize-none py-0 pr-0 pl-12 sm:!pl-0 sm:!h-full max-h-[72px] text-base',
          !initialIcon && 'pl-4',
        )}
        rows={1}
        onclick={() => textareaRef.$?.focus()}
        oninput={handleInput}
        onfocus={handleFocus}
        onblur={handleBlur}
        onkeydown={handleKeydown}
        disabled={loading}
      />

      {#if value.length}
        <Button
          icon="back-to-top"
          class={cn(
            'absolute right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full',
            'border border-green fill-green hover:bg-green hover:fill-white',
            'active:border-green-hover active:bg-green-hover',
            'sm:!bottom-1.5 sm:!right-1.5 sm:!translate-y-0',
          )}
          onclick={() => handleSubmit(value)}
          disabled={loading}
        />
      {/if}
    </label>
  {/snippet}

  {#snippet content()}
    <div
      bind:this={contentRef.$}
      class="w-[var(--bits-popover-anchor-width)] rounded-md border border-porcelain bg-white px-6 py-4"
    >
      <h4 class="mb-3 text-base font-semibold text-rhino sm:!text-sm">Suggested</h4>

      <ul class="[&>li]:mb-3 last:[&>li]:mb-0 sm:[&>li]:mb-2.5">
        {#each predictions as prediction}
          <li>
            <Button
              variant="link"
              class="inline-block h-auto p-0 text-left text-sm sm:!text-base"
              onclick={() => handleSubmit(prediction.question)}
            >
              {prediction.question}
            </Button>
          </li>
        {/each}
      </ul>
    </div>
  {/snippet}
</Popover>

<style lang="postcss">
  :global(.qa-academy-border-gradient) {
    background:
      linear-gradient(white, white) padding-box,
      linear-gradient(to right, #b0ebdb, #ffe7ca) border-box;
  }
</style>
