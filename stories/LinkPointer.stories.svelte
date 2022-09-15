<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Link from '@/ui/LinkPointer.svelte'
</script>

<Meta title="Example/LinkPointer" />

<Story name="LinkPointer">
  <div class="body-3">
    <a href="/" class="link-pointer">body-3</a>
    <br />
    <Link href="/" label="body-3 + pointer" />
  </div>

  <div class="body-2">
    <a href="/" class="link-pointer">body-2</a>
    <br />
    <Link href="/" label="body-1 + pointer" />
  </div>

  <div class="body-1">
    <a href="/" class="link-pointer">body-1</a>
    <br />
    <Link href="/" label="body-1 + pointer" />
  </div>
</Story>

<style>
  div {
    margin: 20px;
  }
</style>
