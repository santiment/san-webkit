<script>
  import AIChatbot, { useAIChatbotCtx } from '$ui/app/AIChatbot/index.js'

  useAIChatbotCtx.set({
    type: 'ACADEMY_QA',
  })
</script>

<AIChatbot />
