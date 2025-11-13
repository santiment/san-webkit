<script>
  import ValidationError from '$ui/core/ValidationError/ValidationError.svelte'
</script>

<div class="flex items-start justify-center gap-3 p-6">
  <ValidationError class="static" error="Some error" />
  <ValidationError
    class="static"
    error="Long error with too much letters to count them properly. It's also should be wrapped to the second line and maybe to the third or fourth one as well"
  />
</div>
