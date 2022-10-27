<script>import { showIntercom } from './../../../analytics/intercom';</script>

<section id="suggestions">
  <div>
    <h4 class="h4 txt-b mrg-l mrg--b">Let's the platform speak for itself</h4>

    <p>Add your credit card to try all Sanbase Pro features FREE for 2 weeks</p>

    <a href="/login" class="btn txt-center body-2 mrg-xl mrg--t" on:click={window.__onLinkClick}
      >Start your free trial</a
    >
  </div>

  <div>
    <h4 class="h4 txt-b mrg-l mrg--b">Talk to one of our experts</h4>

    <p>Request a demo to have one of our product specialists walk you through the platform</p>

    <button class="btn txt-center body-2 mrg-xl mrg--t" on:click={showIntercom}
      >Request a demo</button
    >
  </div>
</section>

<style >section {
  display: grid;
  grid-gap: 16px 40px;
  margin: 0 auto 80px;
  max-width: var(--page-width, 1140px);
}
:global(.desktop) section {
  grid-template-columns: 1fr 1fr;
}

:global(body:not(.desktop)) section {
  padding: 0 16px;
}

div {
  padding: 40px 48px;
  color: var(--white);
  background: var(--blue);
  border-radius: 4px;
}

p {
  max-width: 330px;
}

.btn {
  display: inline-block;
  padding: 8px 10px;
  --bg: var(--white);
  --color: var(--blue);
  --color-hover: var(--blue-hover);
}

:global(body):not(.desktop) div {
  padding: 32px 21px;
}
:global(body):not(.desktop) .btn {
  width: 100%;
}</style>
