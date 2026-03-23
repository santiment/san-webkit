<script>
  import Footer from '$ui/app/Footer'
  import { useMetricsRegistryCtx } from '$lib/ctx/metrics-registry'

  useMetricsRegistryCtx.set()

  const blueAccent = [
    '--accent: var(--blue)',
    '--accent-hover: var(--blue-hover)',
    '--accent-light-4: var(--blue-light-3)',
    '--accent-light-3: var(--blue-light-2)',
    '--accent-light-2: var(--blue-light-1)',
  ].join('; ')

  const orangeAccent = [
    '--accent: var(--orange)',
    '--accent-hover: var(--orange-hover)',
    '--accent-light-4: var(--orange-light-3)',
    '--accent-light-3: var(--orange-light-2)',
    '--accent-light-2: var(--orange-light-1)',
  ].join('; ')
</script>

<div class="flex flex-col gap-16">
  <Footer appVersion="2.5-3038b5d" />
  <Footer style={blueAccent} appVersion="2.5-3038b5d" />
  <Footer style={orangeAccent} appVersion="2.5-3038b5d" />
</div>
