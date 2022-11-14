<script>import { onDestroy } from 'svelte';
import Rocket from './Rocket.svelte';
import Moon from './Moon.svelte';
let className = '';
export { className as class };
export let totalVotes = 0;
export let userVotes = 0;
export let disabled = false;
export let onVote = () => {};
export let hasBorder = true;
export let maxVotesPerUser = 20;
export let voteInterval = 370;
let rocketNode;
let moonNode;
let mooned = false;
let timer;
let votingInterval;

function startVote(e) {
  if (disabled) return;

  if (e.button === 2) {
    return;
  }

  clearTimeout(timer);
  clearInterval(votingInterval);
  vote();
  votingInterval = window.setInterval(vote, voteInterval);
  window.addEventListener(e.type === 'mousedown' ? 'mouseup' : 'touchend', stopVote, {
    once: true
  });
}

function vote() {
  if (userVotes < maxVotesPerUser) {
    userVotes += 1;
    totalVotes += 1;
    onVote();
  }

  resetAnimation(rocketNode);
  resetAnimation(rocketNode.lastChild);
  if (mooned && moonNode) resetAnimation(moonNode);
  mooned = true;
}

function stopVote() {
  clearInterval(votingInterval);
  timer = window.setTimeout(() => mooned = false, 1000);
}

function resetAnimation(node) {
  node.style.animation = 'none';
  node.offsetWidth;
  node.style.animation = '';
}

onDestroy(() => {
  clearTimeout(timer);
  clearInterval(votingInterval);
});</script>

<button
  class="btn row v-center txt-m {className}"
  class:voted={userVotes > 0}
  class:disabled
  class:border={hasBorder}
  on:mousedown|preventDefault={startVote}
  on:touchstart|preventDefault={startVote}
>
  <Moon bind:moonNode {mooned} {totalVotes} />

  <Rocket bind:rocketNode />

  <span style="--digits:{totalVotes.toString().length}">{totalVotes}</span>
</button>

<style>
  .btn {
    padding: 5px 10px 5px 11px;
    animation-timing-function: cubic-bezier(0.7, -0.53, 0.14, 3.52);
    position: relative;
    border-radius: 100px;
    --color-hover: var(--green);
  }
  .btn:not(.disabled) {
    --color: var(--waterloo);
    --fill-hover: var(--waterloo);
  }

  .btn:hover :global(.rocket) {
    animation: shake 1s infinite;
  }
  .btn:hover span {
    color: var(--green);
  }

  .btn.voted {
    background: var(--green-light-1);
    --border: var(--green);
    --color: var(--green);
    --color-hover: var(--green-hover);
    --border-hover: var(--green-hover);
    --fill-hover: var(--green-hover);
  }

  span {
    width: calc(var(--digits) * 1ch);
    text-align: left;
  }

  @keyframes shake {
    0% {
      transform: translate(0, -2%);
    }
    10% {
      transform: translate(1%, -1%);
    }
    20% {
      transform: translate(2%, 0);
    }
    30% {
      transform: translate(-4%, 1%);
    }
    40% {
      transform: translate(4%, -1%);
    }
    50% {
      transform: translate(-4%, 0);
    }
    60% {
      transform: translate(4%, 0);
    }
    70% {
      transform: translate(-4%, 0);
    }
    80% {
      transform: translate(2%, -2%);
    }
    90% {
      transform: translate(-1%, -2%);
    }
    100% {
      transform: translate(0, -3%);
    }
  }
</style>
