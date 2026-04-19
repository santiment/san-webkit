<script lang="ts">
  import Svg from '../../../core/Svg/Svg.svelte'

  import { useFormulaEditorCtx } from './ctx.svelte.js'

  const { formulaEditor } = useFormulaEditorCtx.get()
</script>

<div class="-mt-2 flex items-center gap-2 fill-waterloo pl-2 text-waterloo">
  {#if formulaEditor.validation.$.length}
    <div class="flex flex-wrap items-center gap-2 fill-red text-red">
      <Svg id="warning"></Svg>
      {formulaEditor.validation.$}
    </div>
  {:else if formulaEditor.validation.isLoading$}
    <div class="skeleton h-[20px] w-3/4"></div>
  {:else}
    <Svg id="checkmark-circle" w="14"></Svg>
    Formula is valid
  {/if}
</div>
