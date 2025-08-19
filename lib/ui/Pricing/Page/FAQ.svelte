<script>
  import Svg from './../../../ui/Svg/svelte'

  const link = (content, href = content) =>
    `<a href="${href}" target="_blank" rel="noopener noreferrer" class="link-pointer">${content}</a>`
  const QA = [
    {
      question: 'Can I cancel my paid subscription at any time?',
      answer:
        'Yes! A subscription can either be paid for a month or a year in advance. During this time period, you can cancel your subscription at any point. This will let you use your Pro status for the rest of your billing period without any changes.',
    },

    {
      question: 'Can I pay in crypto?',
      answer:
        'Yes! You can pay in ETH, BTC or any established Ethereum-based stablecoin. There are other options too, involving our SAN token. You can find more information here: ' +
        link(
          'pay with crypto',
          'https://academy.santiment.net/products-and-plans/how-to-pay-with-crypto/',
        ),
    },

    {
      question: "My question wasn't listed here, help!",
      answer: `Our ${link(
        'Santiment Academy',
        'https://academy.santiment.net/',
      )} is aimed to answer many of your initial questions. But please do not hesitate to contact us, either! You should see a chat icon in the lower right corner of this screen. Click it and you'll have the chance to chat with one of us right away. Both our team and our community are available on Discord, too: ${link(
        'https://santiment.net/discord',
      )}`,
    },
  ]

  let opened = new Set()
  function onClick({ currentTarget }) {
    const question = currentTarget.firstChild.data
    if (opened.has(question)) opened.delete(question)
    else opened.add(question)

    opened = opened
  }

  function opening(node) {
    node.style.height = node.firstChild.offsetHeight + 16 + 'px'
    node.style.opacity = 1
  }

  function closing(node) {
    node.style.height = 0
    node.style.opacity = 0

    return { duration: 220 }
  }
</script>

<section id="faq">
  <h2>Frequently Asked Questions</h2>

  {#each QA as { question, answer } (question)}
    {@const isOpened = opened.has(question)}

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="question btn row justify v-center body-1 txt-m mrg-l mrg--t"
      class:opened={isOpened}
      on:click={onClick}
    >
      {question}

      <Svg id="arrow-down" w="14" h="8" class={'arrow-aT4J8S'} />
    </div>

    {#if isOpened}
      <div class="answer body-2" in:opening out:closing>
        <div>{@html answer}</div>
      </div>
    {/if}
  {/each}
</section>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
#faq {
  max-width: 760px;
  margin: 0 auto 80px;
}
#faq :global(a) {
  color: var(--green);
}
#faq :global(a:hover) {
  color: var(--green-hover);
}

:global(body:not(.desktop)) #faq {
  padding: 0 16px;
}

.question {
  padding: 16px 24px;
  --bg: var(--athens);
  --color: var(--fiord);
  --color-hover: var(--black);
}

.answer {
  padding: 0 24px;
  overflow: hidden;
  transition: 0.2s opacity ease-out, 0.2s height ease-out;
  height: 0;
  opacity: 0;
}

:global(.arrow-aT4J8S) {
  transition: 0.25s transform;
}

.opened {
  background: none;
}
.opened :global(.arrow-aT4J8S) {
  transform: rotate(-180deg);
}</style>
