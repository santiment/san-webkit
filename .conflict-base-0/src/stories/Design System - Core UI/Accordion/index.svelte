<script lang="ts">
  import Accordion from '$ui/core/Accordion/Accordion.svelte'

  const items = [
    {
      label: 'What is Santiment?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      label: 'How does behavioral analytics work?',
      answer:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      label: 'What data sources does Santiment use?',
      answer:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
      label: 'How do I get started?',
      answer:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
  ]
</script>

<div class="mx-auto max-w-2xl p-8">
  <Accordion {items}>
    {#snippet content(item)}
      {item.answer}
    {/snippet}
  </Accordion>
</div>
