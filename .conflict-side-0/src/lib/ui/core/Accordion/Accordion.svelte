<script lang="ts">
  import type { Snippet } from 'svelte'

  import { Accordion } from 'bits-ui'

  import Svg from '$ui/core/Svg/index.js'

  type TItem = {
    label: string
    answer: string
  }

  let { items, content }: { items: TItem[]; content: Snippet<[TItem]> } = $props()
</script>

<Accordion.Root type="multiple" class="flex flex-col gap-y-4 text-rhino">
  {#each items as item (item.label)}
    <Accordion.Item value={item.label} class="rounded-lg border">
      <Accordion.Header level={4}>
        <Accordion.Trigger
          class="group relative w-full rounded-lg px-6 py-4 pr-16 text-left text-lg font-semibold hover:bg-athens"
        >
          {item.label}

          <Svg
            id="arrow-down"
            w="14"
            h="8"
            class="absolute right-6 top-1/2 -translate-y-1/2 fill-waterloo transition-transform group-data-[state=open]:rotate-180"
          />
        </Accordion.Trigger>

        <Accordion.Content class="accordion-content overflow-hidden text-base">
          <div class="px-6 pb-4 pt-2">
            {@render content(item)}
          </div>
        </Accordion.Content>
      </Accordion.Header>
    </Accordion.Item>
  {/each}
</Accordion.Root>

<style>
  :global(.accordion-content) {
    &[data-state='open'] {
      animation: accordion-down 200ms ease-out;
    }

    &[data-state='closed'] {
      animation: accordion-up 200ms ease-out;
    }
  }

  @keyframes accordion-down {
    from {
      height: 0;
    }

    to {
      height: var(--bits-accordion-content-height);
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--bits-accordion-content-height);
    }

    to {
      height: 0;
    }
  }
</style>
