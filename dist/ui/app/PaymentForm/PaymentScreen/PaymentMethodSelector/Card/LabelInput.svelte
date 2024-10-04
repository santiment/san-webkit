<script lang="ts">import Input from "../../../../../core/Input/index.js";
let {
  label,
  class: className,
  children,
  ...props
} = $props();
</script>

<label class={className}>
  <div class="mb-[3px] text-xs font-semibold text-waterloo">{label}</div>

  {#if children}
    {@render children()}
  {:else}
    <Input inputClass="p-2.5 px-4" {...props}></Input>
  {/if}
</label>
