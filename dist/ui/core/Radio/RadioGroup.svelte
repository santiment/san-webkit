<script lang="ts">
  import { RadioGroup, type RadioGroupRootProps } from 'bits-ui'

  import { cn } from '../../utils/index.js'

  type TProps = RadioGroupRootProps & { class?: string }

  let { class: className, ...rest }: TProps = $props()
</script>

<RadioGroup.Root class={cn('flex flex-col gap-3', className)} {...rest} />
