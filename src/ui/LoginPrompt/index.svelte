<script>
  import Svg from '../Svg/svelte'
  import Section from './Section.svelte'
  import Metamask from './Metamask.svelte'
  import Divider from './Divider.svelte'
  import Option from './Option.svelte'
  import Google from './Google.svelte'
  import Twitter from './Twitter.svelte'
</script>

<Section
  title="Welcome to Insights"
  titleMargin="mrg-xxl"
  bottomLabel="New to Santiment?"
  bottomAction="Create an account"
  bottomHref="/sign-up">
  <Metamask />

  <Divider />

  <Option href="/login/email" prefetch>
    <Svg id="email" w="16" h="12" class="mrg-s mrg--r $style.icon" />
    Log in with Email
  </Option>

  <Google />
  <Twitter />
</Section>

<style>
  .icon {
    fill: var(--casper);
  }
</style>
