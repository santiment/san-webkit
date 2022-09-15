<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="Example/Links" />

<Template let:args>
  <div class="row">
    This is a <a href="/" class="animhover"><span>Link</span></a> without image
  </div>
  <div class="row">
    This is a <a href="/" class="animhover"
      ><div>
        <span>Link</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAYAAAD/Rn+7AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgBzZZfTsJAEMZndjkAieBzb2B8FhRvwA30AID1BNYT0BTfjTfwBlTqAfAG+ERiMOl7ZdcZQkmzFHjb3e+pO9tJfvvnmx0Ei2rNkjEghvQ5/xPYz68G36dyECyJ4G4ILi3HWuuFROj/dEdfx/IEOBIiBgpw3s4mD8f+swa4uh590LbFZlwDxK1s8nQoz9oRl9rCRHsTBE+LeDTD1gFZfKy8czVTe+ZxAsg6z5ILjeKdzBJU42yetRS9EtKZSdi9sihuySyLapzNI9cq5QVsxmefL3eoVEwzTfBMGvFegFKRj3AsJOMI9BSORWw5A4bmPfBEuUIInbmY1ZyOAynllI1RjfOGoVabZ9BpmVEaUvP+M1wDobd0WWa4cvA7XGPOtCiKy6XLQu31U9eeJa9c22qmolV3+FyX46wf3Con4PC3M3g7lNcAR9o5tTP0o2E1+sGUnXqqm2b9A6Akjs5t3qqGAAAAAElFTkSuQmCC"
          alt="Img"
        />
      </div></a
    > with arrow image
  </div>
</Template>

<Story name="Links" />

<style>
  div.row {
    margin: 20px;
  }
</style>
