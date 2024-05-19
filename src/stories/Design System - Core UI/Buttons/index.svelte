<script>
  import Button from '$ui/core/Button'
</script>

<div class="flex flex-col justify-center divide-y p-6 [&>div]:gap-8 [&>div]:py-3">
  <div class="flex">
    <Button>Button</Button>
    <Button disabled>Button</Button>
  </div>
  <div class="flex">
    <Button icon="info">Button</Button>
    <Button disabled icon="info">Button</Button>
    <Button icon="info" iconOnRight>Button</Button>
  </div>

  <div class="flex">
    <Button variant="fill">Button</Button>
    <Button disabled variant="fill">Button</Button>
  </div>

  <div class="flex">
    <Button variant="fill" icon="info">Button</Button>
    <Button disabled variant="fill" icon="info">Button</Button>
    <Button iconOnRight variant="fill" icon="info">Button</Button>
  </div>

  <div class="flex">
    <Button variant="border">Button</Button>
    <Button disabled variant="border">Button</Button>
  </div>

  <div class="flex">
    <Button variant="border" icon="info">Button</Button>
    <Button disabled variant="border" icon="info">Button</Button>
    <Button iconOnRight variant="border" icon="info">Button</Button>
  </div>

  <div class="flex">
    <Button variant="ghost">Button</Button>
    <Button disabled variant="ghost">Button</Button>
  </div>

  <div class="flex">
    <Button variant="ghost" icon="info">Button</Button>
    <Button disabled variant="ghost" icon="info">Button</Button>
    <Button iconOnRight variant="ghost" icon="info">Button</Button>
  </div>

  <div class="flex">
    <Button icon="info"></Button>
    <Button disabled icon="info"></Button>
  </div>

  <div class="flex">
    <Button variant="fill" icon="info"></Button>
    <Button disabled variant="fill" icon="info"></Button>
  </div>

  <div class="flex">
    <Button variant="border" icon="info"></Button>
    <Button disabled variant="border" icon="info"></Button>
  </div>
</div>
