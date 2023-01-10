<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
</script>

<main class="row v-center fluid">
  <section>
    <h3 class="h3 txt-center mrg-xl mrg--b">You are a 🌟</h3>

    <p class="body-2 c-fiord txt-center mrg-s mrg--b">
      After submiting the questionnaire you will get <br />
      instant access to our free package of datasets, <br />
      containing up to 3 years of data <br />
      for 20 metrics on top of 16 assets
    </p>

    <a
      href="https://app.santiment.net"
      rel="noopener noreferrer"
      class="btn row hv-center fluid mrg-l mrg--b"
    >
      <Svg id="download" w="16" />
      Download the data now
    </a>

    <p class="body-3 txt-center c-waterloo">
      * Please note that the link will expire in 24 hours for security reasons.
    </p>

    <button class="btn-1 txt-center body-2 action fluid"> Start your customised onboarding </button>
  </section>

  <div class="divider" />

  <Svg illus id="san-api/banner" w="320" h="300" />
</main>

<style>
  main {
    padding: 64px 80px 80px 64px;
  }

  .divider {
    height: 332px;
    border-left: 1px solid var(--porcelain);
    margin-left: 60px;
    margin-right: 80px;
  }

  a {
    --color: var(--blue);
    --color-hover: var(--blue-hover);
    padding: 4px 0;
    gap: 8px;
  }

  .action {
    --bg: var(--blue);
    --bg-hover: var(--blue-hover);
    height: 40px;
    margin-top: 40px;
  }
</style>
