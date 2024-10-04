<script lang="ts">import { tv } from "tailwind-variants";
import { cn } from "../../utils/index.js";
import Svg from "../Svg/index.js";
let {
  ref = { $: null },
  icon,
  variant,
  children,
  class: className,
  iconSize = 16,
  iconHeight,
  iconOnRight = false,
  explanation,
  size,
  as = "button",
  loading = false,
  action = () => {
  },
  actionArgs,
  ...rest
} = $props();
const button = tv({
  base: "flex cursor-pointer items-center gap-2",
  variants: {
    children: { false: "" },
    variant: {
      fill: "bg-green fill-white-day text-white-day hover:bg-green-hover",
      border: "border bg-white px-[19px] py-[5px]",
      ghost: "px-2.5 hover:bg-athens hover:text-green"
    },
    iconOnRight: { true: "flex-row-reverse justify-end" },
    explanation: { true: "expl-tooltip" },
    disabled: { true: "cursor-not-allowed !fill-mystic !text-mystic " },
    size: { lg: "h-10 py-1.5 px-5 text-base" },
    loading: { true: "loading" }
  },
  compoundVariants: [
    { variant: void 0, class: "hover:text-green hover:fill-green" },
    {
      variant: "border",
      disabled: false,
      class: "hover:border-green hover:fill-green"
    }
  ]
});
</script>

<svelte:element
  this={rest.href ? 'a' : as}
  bind:this={ref.$}
  aria-label={explanation}
  {...rest}
  use:action={actionArgs}
  class={cn(
    variant && 'rounded-md px-5 py-1.5',

    button({
      variant,
      iconOnRight,
      size,
      loading,
      explanation: !!explanation,
      disabled: !!rest.disabled,
      children: !!children,
    }),

    variant && icon && 'px-2.5',
    variant && rest.disabled && '!bg-athens',

    !children && icon && 'size-8 p-0 center',

    className,
  )}
>
  {#if icon}
    <Svg id={icon} w={iconSize} h={iconHeight}></Svg>
  {/if}

  {#if children}
    {@render children()}
  {/if}
</svelte:element>
