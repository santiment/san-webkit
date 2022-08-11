<script>
  import { showIntercom } from '@/analytics/intercom'
  import Card from './Card.svelte'
</script>

<Card
  yellow
  title="Use Pro plan wisely"
  label="You have full access!"
  action="Academy"
  subaction="Contact support"
  link={{ href: 'https://academy.santiment.net/', target: '_blank' }}
  onSubactionClick={showIntercom}
>
  <p class="c-waterloo">One on one staff assistance and educational calls upon your request</p>
  <img src="{process.env.MEDIA_PATH}/illus/alien.svg" alt="Alien" />
</Card>

<style>
  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
