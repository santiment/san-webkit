<script>import { getDevice$Ctx } from './../stores/responsive';
export let desktop = false;
export let tablet = false;
export let phone = false;
const targets = {
  desktop,
  tablet,
  phone,
  'phone-xs': phone
};
const {
  device$
} = getDevice$Ctx();</script>

{#if targets[$device$.type]}
  <slot />
{/if}
