<script lang="ts">
  import ColorPicker from '$ui/app/ColorPicker/index.js'

  let color = $state('#000000')
</script>

<main class="flex flex-col gap-2 p-4">
  <ColorPicker {color} onChange={(newColor) => (color = newColor)}></ColorPicker>
</main>
