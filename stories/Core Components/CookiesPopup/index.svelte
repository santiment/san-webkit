<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import CookiesPopup from '@/ui/CookiesPopup.svelte'
  import { deleteSavedValue } from '@/utils/localStorage'

  export let props: ComponentProps<CookiesPopup> = {}

  deleteSavedValue('COOKIE_POLICY_ACCEPTED')
</script>

<CookiesPopup {...props} />
