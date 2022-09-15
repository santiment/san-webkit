<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import AnimatedLink from '@/ui/AnimatedLink/index.svelte'
</script>

<Meta title="Example/AnimatedLinks" />

<Story name="AnimatedLinks">
  <div class="row">
    This is a <AnimatedLink href="/" label="Link" /> without image
  </div>
  <div class="row">
    This is a <AnimatedLink href="/" label="Link" hasArrow /> with arrow image
  </div>
</Story>

<style>
  div.row {
    margin: 20px;
  }
</style>
