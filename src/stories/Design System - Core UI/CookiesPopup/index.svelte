<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import CookiesPopup from '$ui/core/CookiesPopup/CookiesPopup.svelte'
  import { deleteSavedValue } from '$lib/utils/localStorage/index.js'

  export let props: ComponentProps<CookiesPopup> = {}

  deleteSavedValue('COOKIE_POLICY_ACCEPTED')
</script>

<CookiesPopup {...props} />
