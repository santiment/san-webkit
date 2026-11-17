<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import { onMount, type ComponentProps, type Snippet } from 'svelte'

  import { cn } from '../../../../utils/index.js'
  import Button from '../../../../core/Button/Button.svelte'
  import Tooltip from '../../../../core/Tooltip/Tooltip.svelte'

  import Value from './Value.svelte'
  import Controls from './Controls.svelte'
  import { useMetricInfoCtx } from './ctx.svelte.js'
  import { getRawSqlMessage } from '../../metrics-api-worker/shared-worker/raw-sql-data-store.js'

  type TProps = {
    metric: TSeries
    isFocused?: boolean
    label?: Snippet<[TSeries]>
    onmouseenter?: () => void
    onmouseleave?: () => void
  } & ComponentProps<typeof Controls>
  let {
    metric,
    label,
    paneControls,
    isFocused = false,
    onPaneChange,
    onVisibilityChange,
    ...rest
  }: TProps = $props()

  const { openedMetric } = useMetricInfoCtx.get()

  onMount(() => () => rest.onmouseleave?.())
</script>

<div {...rest} class="inline-flex center gap-1.5 rounded-sm bg-white/70 whitespace-nowrap">
  <div
    style:---metric-color={metric.ui.$$.color}
    class={cn(
      'group/pane-metric relative flex center rounded-sm border border-transparent bg-transparent p-0.5 px-1.5 whitespace-nowrap hover:border-(---metric-color) hover:bg-white hover:shadow-sm hover:[&+span]:hidden',
      (isFocused || openedMetric.$ === metric) &&
        'metric-opened border-(---metric-color) bg-white shadow-sm [&+span]:hidden',
      !metric.visible.$ && 'text-casper',
    )}
  >
    {#if label}
      {@render label(metric)}
    {:else}
      {metric.label}
    {/if}

    <Controls {metric} {paneControls} {onPaneChange} {onVisibilityChange}></Controls>
  </div>

  {#if metric.visible.$}
    {#if metric.loading.$}
      <div class="loader"></div>
    {:else if metric.error.$ || metric.data.$.length === 0}
      {@const error = metric.error.$ || 'Data is not available'}
      {@const sqlMsg = error instanceof Error ? getRawSqlMessage(error.message) : null}

      <Tooltip
        position="bottom"
        class="z-10000 w-[360px] px-6 py-5 pt-4 text-rhino shadow-dropdown"
      >
        {#snippet children({ ref })}
          {#if sqlMsg}
            <Button
              {ref}
              variant="fill"
              class={'bg-blue-light-1 px-[5px] py-[3px] text-mono text-2xs font-medium !text-blue hover:bg-blue-light-2 data-[state="open"]:bg-blue-light-2'}
              size="sm">SQL</Button
            >
          {:else}
            <Button
              {ref}
              variant="fill"
              icon="error"
              class={'bg-red-light-1 fill-red hover:bg-red-light-2 data-[state="open"]:bg-red-light-2'}
              size="sm"
            ></Button>
          {/if}
        {/snippet}

        {#snippet content()}
          {#if Array.isArray(error)}
            {#each error as item}
              {@render errorSnippet(item)}
            {/each}
          {:else}
            {@render errorSnippet(sqlMsg || error)}
          {/if}
        {/snippet}
      </Tooltip>
    {:else}
      <Value {metric}></Value>
    {/if}
  {/if}

  {#if !!metric.warnings.$?.length}
    <Tooltip position="bottom" class="z-10000 w-[360px] px-6 py-5 pt-4 text-rhino shadow-dropdown">
      {#snippet children({ ref })}
        <Button
          {ref}
          variant="fill"
          icon="warning"
          class={'bg-orange-light-1 fill-red hover:bg-orange-light-2 data-[state="open"]:bg-orange-light-2'}
          size="sm"
        ></Button>
      {/snippet}

      {#snippet content()}
        <div class="warnings whitespace-pre-line">{@html metric.warnings.$![0]}</div>
      {/snippet}
    </Tooltip>
  {/if}
</div>

{#snippet errorSnippet(error: Error | string)}
  <div>
    {typeof error === 'string' ? error : error.message}
  </div>
{/snippet}

<style>/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}.warnings :global(code){background-color:rgb(var(--c-athens) / 1);padding-inline:calc(var(--spacing,.25rem) * 1.5);padding-block:calc(var(--spacing,.25rem) * .5);font-family:monospace;font-size:12px;line-height:var(--tw-leading,16px);--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:rgb(var(--c-fiord) / 1);border-radius:.25rem}:global(.group\/pane-metric.relative){--expl-left:50%;--expl-align-x:-50%}.loader{aspect-ratio:1;background:var(--mystic);--_mask:conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;width:18px;-webkit-mask:var(--_mask);-webkit-mask:var(--_mask);-webkit-mask:var(--_mask);mask:var(--_mask);-webkit-mask-composite:source-out;-webkit-mask-composite:source-out;border-radius:50%;padding:4px;animation:1s linear infinite spin;-webkit-mask-composite:source-out;mask-composite:subtract}@keyframes spin{to{transform:rotate(360deg)}}@property --tw-font-weight{syntax:"*";inherits:false}
</style>
