<script>export let isActive;
export let onComplete;</script>

{#if isActive}
  <div class="panel box">
    <p>
      You can click "Proposals" to view <br />
      your local unfinished proposals
    </p>
    <button class="complete body-3 btn btn-2" on:click={onComplete}>Got it</button>
  </div>
{/if}

<style>
  .tutorial {
    position: relative;
    z-index: 100;
  }

  .tutorial::after,
  .tutorial::before {
    content: '';
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .tutorial::after {
    position: absolute;
    top: -2px;
    left: -7px;
    padding: 2px 7px;
    background: var(--white);
  }

  .tutorial::before {
    position: fixed;
    background: black;
    opacity: 0;
    animation: appear 0.65s forwards;
  }

  .panel {
    opacity: 0;
    --opacity: 1;
    position: absolute;
    left: 50%;
    top: 35px;
    transform: translateX(-50%);
    padding: 8px 12px;
    background: #505573 /* fiord */;
    border-color: #505573;
    color: #fff;
    animation: appear 0.25s forwards 0.55s;
  }

  .complete {
    margin: 12px 0 0 auto;
    height: 32px;
    --color: var(--green);
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: var(--opacity, 0.7);
    }
  }
</style>
