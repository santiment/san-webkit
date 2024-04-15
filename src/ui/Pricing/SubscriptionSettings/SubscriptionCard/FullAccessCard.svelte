<script lang="ts">
  import { showIntercom } from '@/analytics/intercom'
  import Card from './Card.svelte'

  export let currentPlanName: string
</script>

<Card
  yellow
  title="Use {currentPlanName} plan wisely"
  label="You have full access!"
  action="Academy"
  subaction="Contact support"
  link={{ href: 'https://academy.santiment.net/', target: '_blank' }}
  onSubactionClick={showIntercom}
  isFullAccess
>
  <p class="c-waterloo">One on one staff assistance and educational calls upon your request</p>
  <img src="{process.env.MEDIA_PATH}/illus/alien.svg" alt="Alien" />
</Card>

<style lang="scss">
  img {
    position: absolute;
    bottom: 0;
    right: 0;

    :global(.phone-xs) &,
    :global(.phone) & {
      width: 50%;
    }
  }
</style>
