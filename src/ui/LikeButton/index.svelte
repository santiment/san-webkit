<script lang="ts">
  import Rocket from './Rocket.svelte'
  import Moon from './Moon.svelte'

  export let otherVotes = 0
  export let userVotes = 0

  let rocketNode: HTMLElement
  let moonNode: HTMLElement
  let mooned = false
  let timer
  let votingInterval

  $: totalVotes = otherVotes + userVotes

  function startVote(e: MouseEvent) {
    clearTimeout(timer)
    clearInterval(votingInterval)

    vote()
    votingInterval = setInterval(vote, 350)
    window.addEventListener(
      e.type === 'mousedown' ? 'mouseup' : 'touchend',
      stopVote,
      { once: true }
    )
  }

  function vote() {
    userVotes += 1
    resetAnimation(rocketNode)
    if (mooned && moonNode) resetAnimation(moonNode)
    mooned = true
  }

  function stopVote() {
    clearInterval(votingInterval)
    timer = setTimeout(() => (mooned = false), 1000)
  }

  function resetAnimation(node: HTMLElement) {
    node.style.animation = 'none'
    node.offsetWidth // NOTE(vanguard): Awaiting style recalc
    node.style.animation = ''
  }
</script>

<button
  class="border btn row v-center txt-m"
  class:voted={userVotes > 0}
  on:mousedown|preventDefault={startVote}
  on:touchstart|preventDefault={startVote}
>
  <Moon bind:moonNode {mooned} {totalVotes} />

  <Rocket bind:rocketNode />

  <span style="--digits:{totalVotes.toString().length}">{totalVotes}</span>
</button>

<style>
  .btn {
    padding: 5px 8px 5px 9px;
    animation-timing-function: cubic-bezier(0.7, -0.53, 0.14, 3.52);
    position: relative;
    border-radius: 100px;
  }
  .btn:hover {
    animation: shake 1s infinite;
  }

  .voted {
    background: var(--green-light-1);
    --border: var(--green);
    --color: var(--green);
    --color-hover: var(--green-hover);
    --border-hover: var(--green-hover);
  }

  span {
    width: calc(var(--digits) * 1ch);
    text-align: left;
  }

  @keyframes shake {
    0% {
      --x: 0;
      --y: -2%;
    }
    10% {
      --x: 1%;
      --y: -1%;
    }
    20% {
      --x: 2%;
      --y: 0;
    }
    30% {
      --x: -4%;
      --y: 1%;
    }
    40% {
      --x: 4%;
      --y: -1%;
    }
    50% {
      --x: -4%;
      --y: 0;
    }
    60% {
      --x: 4%;
      --y: 0;
    }
    70% {
      --x: -4%;
      --y: 0;
    }
    80% {
      --x: 2%;
      --y: -2%;
    }
    90% {
      --x: -1%;
      --y: -2%;
    }
    100% {
      --x: 0;
      --y: -3%;
    }
  }
</style>
