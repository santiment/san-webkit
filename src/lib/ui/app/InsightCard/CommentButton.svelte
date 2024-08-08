<script lang="ts">
  import Button from '$ui/core/Button/index.js'

  const { class: className = 'mrg-m mrg--l', id, count = 0, href }: { class?: string, id: string, count?: number, href: string, source: any } = $props();
</script>

<Button
  href="{href}?_wc=1#comments"
  class={className}
  {count}
/>
