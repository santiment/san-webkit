<script>
  import DigestForm from './../../ui/DigestForm.svelte'
  import Svg from './../../ui/Svg/svelte'
  import { links } from './links'
  import Bottom from './Bottom.svelte'

  let className = ''
  export { className as class }
</script>

<footer class={className}>
  <div class="footer">
    <div class="body-2 row top justify c-waterloo">
      <div class="description column">
        <a href="https://santiment.net/" class="mrg-l mrg--b">
          <Svg illus id="santiment" w="113" h="22" />
        </a>
        Behavioral analytics for the crypto market
      </div>

      <div class="grid">
        {#each links as { href, title }}
          <a {href} target="_blank" rel="noreferrer" class="link">{title}</a>
        {/each}
      </div>

      <div class="forms">
        <div class="digest">
          <h4 class="txt-m mrg-m mrg--b">Subscribe to the weekly Digest!</h4>
          <DigestForm class="mrg-xl mrg--b s-ynmjiu" label="Subscribe" />
        </div>
      </div>
    </div>

    <Bottom />
  </div>
</footer>

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
:global(footer a:hover) {
  --color: var(--accent, var(--green));
}

footer {
  background: var(--athens);
  padding: 0 24px;
}

.footer {
  max-width: var(--page-width, 1140px);
  margin: 0 auto;
}

.top {
  padding: 56px 0 40px;
  flex-wrap: wrap;
}

.forms {
  --max-width: 100%;
}

:global(.s-ynmjiu) {
  width: 386px;
}

.google {
  display: block;
  line-height: 0;
}

.grid {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 1fr);
  gap: 16px 70px;
  margin: 40px 0;
}

.digest {
  flex: 1;
}

:global(body.phone) .top, :global(body.phone-xs) .top {
  flex-direction: column;
}
:global(body.phone) :global(.s-ynmjiu), :global(body.phone-xs) :global(.s-ynmjiu) {
  margin-bottom: 40px;
}

:global(body.tablet) .grid {
  grid-template-rows: repeat(5, 1fr);
  margin: 0;
}
:global(body.tablet) .forms {
  width: 100%;
  display: flex;
  margin-top: 28px;
}

:global(body.desktop) .description {
  max-width: 124px;
}
:global(body.desktop) .top {
  padding: 63px 0 53px;
}
:global(body.desktop) .grid {
  grid-template-rows: repeat(5, 1fr);
  margin: 0;
}
:global(body.desktop) :global(.s-ynmjiu) {
  font: var(--body-3);
}

:global(body:not(.desktop)) :global(.s-ynmjiu) {
  width: auto;
}</style>
