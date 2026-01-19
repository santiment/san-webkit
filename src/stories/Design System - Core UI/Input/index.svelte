<script>
  import Input from '$ui/core/Input'
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <Input></Input>

    <Input placeholder="Placeholder"></Input>

    <Input icon="search-12"></Input>

    <Input icon="search-12">
      {#snippet left()}
        left
      {/snippet}
    </Input>

    <Input>
      {#snippet left()}
        left
      {/snippet}

      {#snippet right()}
        right
      {/snippet}
    </Input>

    <Input icon="search-12" disabled>
      {#snippet left()}
        left
      {/snippet}

      {#snippet right()}
        right
      {/snippet}
    </Input>

    <Input placeholder="Number input" type="number"></Input>

    <Input placeholder="Disabled input" disabled></Input>
  </div>
</div>
