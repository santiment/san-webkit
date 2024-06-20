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
      ghost: "px-3 hover:bg-athens hover:text-green"
    },
    iconOnRight: { true: "flex-row-reverse" },
    explanation: { true: "expl-tooltip" },
    disabled: { true: "cursor-not-allowed !fill-mystic !text-mystic " }
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
  this={rest.href ? 'a' : 'button'}
  bind:this={ref.$}
  aria-label={explanation}
  {...rest}
  use:action={actionArgs}
  class={cn(
    variant && 'rounded-md px-5 py-1.5',

    button({
      variant,
      iconOnRight,
      explanation: !!explanation,
      disabled: !!rest.disabled,
      children: !!children,
    }),

    variant && icon && 'px-3',
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
