<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'
  import Button from '$ui/core/Button/index.js'
  import StatesGroup from './StatesGroup.svelte'
</script>

<main class="flex flex-col gap-12 p-4">
  <section>
    <h1 class="mb-2 text-2xl">Main Buttons</h1>
    <p class="max-w-96 text-waterloo">
      These buttons don't require any customisation with css. Their appearence is controlled by
      props
    </p>

    <section class="mt-5 flex flex-wrap gap-16">
      <div class="flex flex-col gap-6">
        <h2 class="text-lg-2 font-semibold">Fill / Primary</h2>

        <StatesGroup title="Default Accent (Green)" variant="fill" />

        <StatesGroup title="Custom Accent / Blue" variant="fill" accent="blue" />
        <StatesGroup title="Custom Accent / Orange" variant="fill" accent="orange" />
      </div>

      <div class="flex flex-col gap-6">
        <h2 class="text-lg-2 font-semibold">Border / Secondary</h2>

        <StatesGroup title="Default" variant="border" withIcons />

        <StatesGroup title="Rounded" variant="border" withIcons rounded />

        <StatesGroup title="Icon" variant="border" buttons={iconButtons} />

        <StatesGroup title="Icon Rounded" variant="border" rounded buttons={iconButtons} />
      </div>

      <div class="flex flex-col gap-6">
        <h2 class="text-lg-2 font-semibold">Ghost / Tertiary</h2>

        <StatesGroup title="Default" variant="ghost" withIcons />

        <StatesGroup title="Rounded" variant="ghost" withIcons rounded />

        <StatesGroup title="Icon" variant="ghost" buttons={iconButtons} />

        <StatesGroup title="Icon Rounded" variant="ghost" rounded buttons={iconButtons} />
      </div>

      <div class="flex flex-col gap-6">
        <h2 class="text-lg-2 font-semibold">Links / Tertiary</h2>

        <StatesGroup title="Title" variant="title" />

        <StatesGroup title="Link" variant="link" />

        <StatesGroup title="Link Pointer" variant="link" icon="pointer" iconSize="10" iconOnRight />

        <StatesGroup title="Plain (No styles)" variant="plain" />

        <StatesGroup title="Plain Icon (No styles)" variant="plain" buttons={iconButtons} />
      </div>
    </section>
  </section>

  <section>
    <h1 class="mb-2 text-2xl">Custom Buttons Examples</h1>
    <p class="text-waterloo">These are the main buttons but customised with css</p>

    <section class="mt-5 flex flex-wrap gap-10">
      <Button
        variant="fill"
        class="bg-athens fill-waterloo px-2.5 text-black hover:bg-athens hover:fill-green hover:text-green"
        icon="external-link"
        iconOnRight
      >
        Open on Charts
      </Button>

      <Button
        variant="fill"
        class="bg-orange-light-1 fill-orange px-2.5 text-orange hover:bg-orange-light-2"
        icon="crown"
      >
        Get full access
      </Button>

      <Button
        variant="fill"
        class="bg-athens fill-waterloo px-2.5 text-black hover:bg-athens hover:fill-green hover:text-green"
        icon="plus"
      >
        Compare
      </Button>

      <Button
        variant="border"
        class="border-green px-5 text-green hover:border-green-hover hover:bg-white hover:text-green-hover"
      >
        Write Insight
      </Button>

      <div class="flex gap-[1px]">
        <Button variant="fill" class="rounded-r-none px-3">Share</Button>
        <Button variant="fill" class="rounded-l-none" icon="link" />
      </div>
    </section>
  </section>
</main>

{#snippet iconButtons(props: ComponentProps<typeof Button>)}
  <div class="flex flex-col gap-2">
    <Button {...props} explanation="some info" icon="info" size="lg" />
    <Button {...props} explanation="some info" icon="info" />
    <Button {...props} explanation="some info" icon="info" size="sm" />
    <Button {...props} explanation="some info" icon="info" size="xs" />
  </div>
{/snippet}
