<script lang="ts">import Button from "../../core/Button/index.js";
import { getDialogControllerCtx } from "../../core/Dialog/dialogs.js";
import Svg from "../../core/Svg/index.js";
import { cn } from "../../utils/index.js";
import OnlyOnDevice from "../../utils/OnlyOnDevice/index.js";
import { useScreenTransitionCtx } from "../ScreenTransition/index.js";
import { SCREENS } from "./state.js";
let { disabled } = $props();
const { Controller } = getDialogControllerCtx();
const { screen, screens } = useScreenTransitionCtx(SCREENS);
</script>

<OnlyOnDevice desktop>
  <div class="flex items-center justify-between border-b px-6 py-4">
    <Svg illus id="santiment-sanbase" w="171" h="20"></Svg>

    <nav class="flex gap-4 fill-waterloo font-medium text-waterloo center">
      {#each screens as item, i (item)}
        {#if i > 0}
          <Svg id="arrow-right" w="5" h="8"></Svg>
        {/if}

        <Button
          class={cn(item === screen.$ && 'text-rhino')}
          disabled={item === disabled}
          onclick={() => (screen.$ = item)}
        >
          {item.name}
        </Button>
      {/each}
    </nav>

    <Button variant="border" onclick={Controller.close}>Cancel</Button>
  </div>
</OnlyOnDevice>
