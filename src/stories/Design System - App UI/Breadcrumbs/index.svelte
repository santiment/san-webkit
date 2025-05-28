<script lang="ts">
  import Breadcrumbs, { type TLink } from '$ui/app/Breadcrumbs/index.js'

  const links: TLink[] = [
    { title: 'Page name #1', href: '/page1' },
    { title: 'Page name #2', href: '/page2' },
    { title: 'Page name #3', href: '/page3' },
  ]
</script>

<Breadcrumbs {links} />
