<script lang="ts">
  import img from './san.svg'
  import Description from '../Description.svelte'
  import OnlyAnnualMethod from '../OnlyAnnualMethod.svelte'
  import Note from '../../../Note.svelte'
</script>

<OnlyAnnualMethod>
  <Description name="Burning SAN Tokens for Subscription Payments" {img}>
    {#snippet noteSnippet()}
      <Note class="mb-2">
        SAN burn is not available for residents of the Swiss Confederation due to tax regulations
      </Note>
    {/snippet}

    <p>
      Burning SAN tokens provides a substantial discount incentive for our users who choose to take
      advantage of this opportunity. It allows you to burn SAN tokens at a rate of twice the current
      market rate, which equates to a 50% discount compared to regular payments. Additionally, the
      total supply of SAN shrinks with every burn, benefiting all SAN holders.
    </p>

    <p>
      If you are ready to burn SAN for a yearly Sanbase Pro subscription, please contact us at
      <a href="mailto:support@santiment.net" class="text-green">support@santiment.net</a>
      and we will be happy to guide you through the process.
    </p>
  </Description>
</OnlyAnnualMethod>
