<script>
  let className = ''
  export { className as class }
  export let hasArrow = false
  export let target = '_blank'
  export let rel = 'noopener noreferrer'
  export let href = '#'
  export let label
</script>

<a {href} {target} {rel} class="btn-0 {className} animhover" {...$$props}>
  <div>
    <span>{label}</span>
    {#if hasArrow}
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAYAAAD/Rn+7AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgBzZZfTsJAEMZndjkAieBzb2B8FhRvwA30AID1BNYT0BTfjTfwBlTqAfAG+ERiMOl7ZdcZQkmzFHjb3e+pO9tJfvvnmx0Ei2rNkjEghvQ5/xPYz68G36dyECyJ4G4ILi3HWuuFROj/dEdfx/IEOBIiBgpw3s4mD8f+swa4uh590LbFZlwDxK1s8nQoz9oRl9rCRHsTBE+LeDTD1gFZfKy8czVTe+ZxAsg6z5ILjeKdzBJU42yetRS9EtKZSdi9sihuySyLapzNI9cq5QVsxmefL3eoVEwzTfBMGvFegFKRj3AsJOMI9BSORWw5A4bmPfBEuUIInbmY1ZyOAynllI1RjfOGoVabZ9BpmVEaUvP+M1wDobd0WWa4cvA7XGPOtCiKy6XLQu31U9eeJa9c22qmolV3+FyX46wf3Con4PC3M3g7lNcAR9o5tTP0o2E1+sGUnXqqm2b9A6Akjs5t3qqGAAAAAElFTkSuQmCC"
        alt="right arrow"
      />
    {/if}
  </div>
</a>

<style>
  .animhover {
    padding: 0 4px;
  }

  .animhover div {
    display: flex;
    align-items: center;
  }

  .animhover img {
    width: 14px;
    margin-left: 4px;
    transform: translateX(-2px);
    transition: transform 0.3s;
  }

  .animhover:hover img {
    transform: translateX(0);
  }

  .animhover span {
    position: relative;
  }

  .animhover span:after {
    content: '';
    position: absolute;
    background-color: var(--green);
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    transform-origin: bottom left;
    transition: width 0.3s;
  }

  .animhover:hover span:after {
    width: 100%;
  }
</style>
