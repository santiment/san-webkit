<nav class="row c-waterloo">
  <button class="btn" class:active={true}>All</button>
  <button class="btn">ERC20</button>
  <button class="btn">Stablecoins</button>
  <button class="btn">DeFi</button>
</nav>

<style>
  nav {
    gap: 16px;
    background: var(--white);
    border-bottom: 1px solid var(--porcelain);
  }

  .btn {
    border-radius: 0;
    padding: 12px 2px;
    margin-bottom: -1px;
    --color-hover: var(--green);
  }

  .active {
    --color: var(--green);
    border-bottom: 2px solid var(--green);
  }
</style>
