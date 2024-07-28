<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { getDialogControllerCtx } from '$ui/core/Dialog/dialogs.js'
  import Svg from '$ui/core/Svg/index.js'

  const { Controller } = getDialogControllerCtx()
</script>

<div class="flex items-center justify-between border-b px-6 py-4">
  <Svg illus id="santiment-sanbase" w="171" h="20"></Svg>

  <nav class="flex gap-4 fill-waterloo font-medium text-waterloo center">
    <Button>1. Choose your plan</Button>

    <Svg id="arrow-right" w="5" h="8"></Svg>

    <Button>2. Payment details</Button>
  </nav>

  <Button variant="border" onclick={Controller.close}>Cancel</Button>
</div>
