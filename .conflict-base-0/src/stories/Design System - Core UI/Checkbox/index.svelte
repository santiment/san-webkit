<script>
  import Checkbox from '$ui/core/Checkbox/index.js'
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="grid max-w-sm grid-cols-2 gap-4">
    <label class="flex items-center gap-2">
      <Checkbox></Checkbox>
      Inactive
    </label>

    <label class="flex items-center gap-2">
      <Checkbox isActive></Checkbox>
      Active
    </label>

    <label class="flex items-center gap-2">
      <Checkbox disabled></Checkbox>
      Disabled inactive
    </label>

    <label class="flex items-center gap-2">
      <Checkbox disabled isActive></Checkbox>
      Disabled active
    </label>

    <label class="mb-5 flex items-center gap-2">
      <Checkbox error="Some validation error"></Checkbox>
      Error
    </label>

    <label class="flex items-center gap-2">
      <Checkbox indeterminate></Checkbox>
      Indeterminate
    </label>

    <label class="flex items-center gap-2">
      <Checkbox indeterminate disabled></Checkbox>
      Disabled Indeterminate
    </label>
  </div>
</div>
