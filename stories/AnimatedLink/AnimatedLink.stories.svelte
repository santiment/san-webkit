<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import AnimatedLink from '@/ui/AnimatedLink/index.svelte'
</script>

<Meta title="Example/AnimatedLinks" />

<Story name="AnimatedLinks">
  <div>
    This is a <AnimatedLink href="/" label="Link" /> without image
  </div>
  <div>
    This is a <AnimatedLink href="/" label="Link" hasArrow /> with arrow image
  </div>
  <div>
    <p class="body-1">
      We bring together everything that you can use to make your next action. Datasets, <AnimatedLink
        href="https://app.santiment.net/screener/new"
        label="screeners"
      />, <AnimatedLink href="https://app.santiment.net/watchlists" label="watchlists" />, <AnimatedLink
        href="https://app.santiment.net/alerts"
        label="alerts"
      />, flexible <AnimatedLink href="https://app.santiment.net/charts" label="chart layouts" />, <AnimatedLink
        href="https://app.santiment.net/dashboards"
        label="dashboards"
      />, <AnimatedLink href="https://insights.santiment.net/" label="insights" /> from the community
      and the San analytics team.
    </p>
  </div>
  <div>
    <AnimatedLink
      href="https://app.santiment.net/s/1PcSbMgY"
      label="Get to know social trends"
      hasArrow
    />
  </div>
</Story>

<style>
  div {
    margin: 20px;
  }
</style>
