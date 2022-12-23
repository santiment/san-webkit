<script>import Svg from './../../ui/Svg/svelte';
import { showChristmasNFTDialog } from './../../ui/ChristmasNFTDialog/Dialog.svelte';
import { IsMobile } from './../../stores/responsive';
import battle from './battle.svg';
import bgMobile from './banner-bg-mobile.svg';
import bg from './banner-bg.svg';</script>

<section class="row justify">
  <div class="info column">
    <div class="logo row v-center">
<<<<<<< HEAD
      <Svg illus id="santiment" w="86" h="16" class="santiment-1lSG-a" />
=======
      <Svg illus id="santiment" w="86" h="16" class="santiment-35SP2F" />
>>>>>>> f6032372706f2cbb84d6f12fba342e52e32de478
      <img src={battle} alt="xmas" class="mrg-s mrg--l" />
    </div>
    <h3 class="h3 txt-m nowrap">Predict next market <br /> move. Win NFT!</h3>
    <p class="body-2 mrg-xl mrg--b nowrap">
      Get 3 free months of Sanbase Pro {#if $IsMobile}<br /> plus{:else}plus <br />{/if} 18% lifetime
      discount
    </p>
    {#if $IsMobile}
      <div class="tip row">
<<<<<<< HEAD
        <Svg id="light" w="16" h="22" class="light-7c9jnu mrg-m mrg--r" />
=======
        <Svg id="light" w="16" h="22" class="light-2HrYp1 mrg-m mrg--r" />
>>>>>>> f6032372706f2cbb84d6f12fba342e52e32de478
        <span class="body-2 c-fiord">
          Head to Sanbase’s desktop version for the ability to participate in the Battle
        </span>
      </div>
    {:else}
      <button class="btn-1 body-3" on:click={showChristmasNFTDialog}>Join the Battle!</button>
    {/if}
  </div>
  <div class="relative">
    <img src={$IsMobile ? bgMobile : bg} alt="xmas" class="bg" />
  </div>
</section>

<style >section {
  background: var(--mirage);
  border-radius: 8px;
  height: 295px;
  overflow: hidden;
}

.info {
  padding: 23px 0 32px 40px;
}

.logo {
  margin-bottom: 26px;
}

<<<<<<< HEAD
:global(.santiment-1lSG-a) {
=======
:global(.santiment-35SP2F) {
>>>>>>> f6032372706f2cbb84d6f12fba342e52e32de478
  --black: var(--white);
  margin-bottom: 3px;
}

h3 {
  margin-bottom: 10px;
}

h3,
p {
  color: var(--white);
}

button {
  max-width: 132px;
}

.bg {
  position: absolute;
  top: -100px;
  right: -100px;
}

:global(body:not(.desktop)) section {
  height: 661px;
  max-width: 421px;
  flex-direction: column-reverse;
}
:global(body:not(.desktop)) .bg {
  width: calc(100% + 200px);
  top: -100px;
  right: -100px;
}
:global(body:not(.desktop)) .info {
  padding: 0 24px 32px 24px;
}
:global(body:not(.desktop)) .logo {
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}
:global(body:not(.desktop)) h3 {
  margin-bottom: 12px;
}
:global(body:not(.desktop)) p {
  margin-bottom: 32px;
}
:global(body:not(.desktop)) h3,
:global(body:not(.desktop)) p {
  text-align: center;
  white-space: normal;
}
:global(body:not(.desktop)) .tip {
  padding: 12px 16px;
  background: var(--purple-light-1);
  border-radius: 8px;
}
<<<<<<< HEAD
:global(body:not(.desktop)) :global(.light-7c9jnu) {
=======
:global(body:not(.desktop)) :global(.light-2HrYp1) {
>>>>>>> f6032372706f2cbb84d6f12fba342e52e32de478
  fill: var(--purple);
}</style>
