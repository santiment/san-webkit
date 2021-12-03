<script lang="ts">
  import type { SvelteComponentModule } from './dialogs'
  import { onMount } from 'svelte'
  import { get } from 'svelte/store'
  import { dialogs, DialogLock } from './dialogs'
  import Svg from '../Svg/svelte'

  let className = ''
  export const closeDialog = (skipLockChecks = true) =>
    requestDialogClose(skipLockChecks)
  export let i: number
  export let title: string | SvelteComponentModule = ''
  export let DialogPromise: SAN.DialogController
  export let onBeforeDialogClose = () => {}
  export let noTitle = false
  export let noBg = false
  export { className as class }

  let clickAwayMouseDown = false

  const checkIsEditable = ({
    isContentEditable,
    localName,
  }: HTMLElement): boolean =>
    isContentEditable || localName === 'input' || localName === 'textarea'

  function onKeyup({ code, target }: KeyboardEvent): void {
    if (
      code === 'Escape' &&
      !(target && checkIsEditable(target as HTMLElement))
    ) {
      requestDialogClose()
    }
  }

  function onClickaway({ type, target, currentTarget }: MouseEvent): void {
    if (target === currentTarget) {
      if (type === 'mousedown') {
        clickAwayMouseDown = true
        return
      } else if (type === 'mouseup' && clickAwayMouseDown) {
        requestDialogClose()
      }
    }

    clickAwayMouseDown = false
  }

  onMount(() => {
    document.body.style.overflowY = 'hidden'
    document.body.style.touchAction = 'none'
    window.addEventListener('keyup', onKeyup)
  })

  function requestDialogClose(skipLockChecks?: boolean | MouseEvent) {
    if (skipLockChecks !== true) {
      onBeforeDialogClose()

      if (DialogPromise.locking === DialogLock.LOCKED) return

      if (
        DialogPromise.locking === DialogLock.WARN &&
        !confirm('Do you want to close the dialog?')
      ) {
        return
      }
    }

    if (i === 0) {
      document.body.style.overflowY = ''
      document.body.style.touchAction = ''
    }

    const { length } = get(dialogs)
    if (i === length - 1) {
      window.removeEventListener('keyup', onKeyup)
      DialogPromise.reject()
      dialogs.hide(i)
    }
  }
</script>

<div
  class="bg row v-center h-center"
  class:noBg
  on:mousedown={onClickaway}
  on:mouseup={onClickaway}
>
  <div class="border box column {className}">
    {#if noTitle === false}
      <h2
        class="body-2 row v-center justify"
        class:empty={!title && !$$slots.title}
      >
        {#if $$slots.title}
          <slot name="title" />
        {:else}
          {title}
        {/if}

        <Svg
          id="close"
          class="btn mrg-a mrg--l $style.close"
          on:click={requestDialogClose}
        />
      </h2>
    {/if}

    <slot />
  </div>
</div>

<style>
  .bg {
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
  }
  .noBg {
    background: transparent;
  }

  .column {
    max-width: 96%;
    max-height: 92%;
    position: relative;
  }

  .body-2 {
    padding: 12px 20px;
    white-space: nowrap;
    border-bottom: 1px solid var(--porcelain);
  }
  .empty {
    border: 0;
    position: absolute;
    right: 0;
    padding: 16px;
  }

  .close {
    width: 12px;
    height: 12px;
    --fill: var(--waterloo);
    --fill-hover: var(--green);
  }

  :global(.dialog-body) {
    overflow-y: auto;
    overflow-x: hidden;
    padding: 12px 20px 0;
    margin-bottom: 12px;
  }

  :global(.tablet) .bg,
  :global(.phone) .bg {
    align-items: flex-end;
    animation: fadeIn 0.15s ease-out both;
  }

  :global(.tablet) .column,
  :global(.phone) .column {
    border-radius: 15px 15px 0 0;
    max-width: 100%;
    max-height: 90%;
    width: 100%;
    animation: slideIn 0.2s ease-out both;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
