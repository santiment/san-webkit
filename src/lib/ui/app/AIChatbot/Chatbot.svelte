<script lang="ts">
  import type { Component as ComponentType } from 'svelte'
  import type { TAiChatType } from './types.js'

  import AcademyQA from './variants/academyQA/index.js'
  import DyorDashboard from './variants/dyorDashboard/index.js'
  import { useAIChatbotCtx } from './ctx.svelte.js'

  const { aiChatbot } = useAIChatbotCtx()

  const variantMap: Record<TAiChatType, ComponentType> = {
    ['ACADEMY_QA']: AcademyQA,
    ['DYOR_DASHBOARD']: DyorDashboard,
  }

  const Chatbot = variantMap[aiChatbot.$$.type || 'DYOR_DASHBOARD']
</script>

<Chatbot />
