<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import AnimatedLink from '@/ui/AnimatedLink/index.svelte'
</script>

<Meta title="Example/Links" />

<Template>
  <div class="row">
    This is a <AnimatedLink href="/" label="Link" /> without image
  </div>
  <div class="row">
    This is a <AnimatedLink href="/" label="Link" hasArrow /> with arrow image
  </div>
</Template>

<Story name="Links" />

<style>
  div.row {
    margin: 20px;
  }
</style>
