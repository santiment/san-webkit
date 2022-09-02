<script>import Socials from './Socials.svelte';</script>

<div class="bottom c-casper">
  <div class="divider" />

  <div class="copyright">
    © 2016—{new Date().getFullYear()} Santiment
  </div>

  <div class="extras">
    <a href="https://santiment.net/terms/" target="_blank">Terms</a>
    <a href="https://app.santiment.net/privacy-policy" target="_blank">Privacy</a>
    <a
      href="https://www.notion.so/santiment/Santiment-Media-ff72838a16164db4b7e90478e18c3776"
      target="_blank"
      class="mrg-a mrg--r">Media Kit</a
    >
  </div>

  <Socials />
</div>

<style >.bottom {
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-areas: "socials" "divider" "extras" "copyright";
}

.extras {
  grid-area: extras;
}

.divider {
  grid-area: divider;
  border-top: 1px solid var(--porcelain);
  margin: 40px 0;
}

.copyright {
  grid-area: copyright;
  margin: 16px 0 56px;
}

:global(.tablet) .bottom {
  grid-template-areas: "divider divider divider" "socials extras extras" "socials copyright copyright";
}
:global(.tablet) .copyright,
:global(.tablet) .extras {
  text-align: right;
}

:global(.desktop) .bottom {
  grid-template-areas: "divider divider divider" "copyright extras socials";
}

:global(.tablet) .bottom,
:global(.desktop) .bottom {
  text-align: left;
  padding: 0 0 24px;
}
:global(.tablet) .divider,
:global(.desktop) .divider {
  margin: 0 0 24px;
}
:global(.tablet) .copyright,
:global(.desktop) .copyright {
  margin: 0;
}

a {
  margin-left: 35px;
}

a:first-child {
  margin-left: auto;
}</style>
