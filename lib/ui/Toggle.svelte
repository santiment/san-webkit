<script>let className = '';
export { className as class };
export let isActive = false;
export let disabled = false;
export let icon = 'toggle';</script>

<div class="toggle btn relative {className}" on:click class:isActive class:disabled>
<<<<<<< HEAD
  <img alt="Toggle" src="{process.env.ICONS_PATH}/{icon}.svg" class="toggle-icon-13t7uv" />
=======
  <img alt="Toggle" src="{process.env.ICONS_PATH}/{icon}.svg" class="toggle-icon-1QVIeg" />
>>>>>>> 7a01f87f5ef161038b1901bf4d9fb36cee23e677
</div>

<style >.toggle {
  height: var(--toggle-height, 20px);
  width: var(--toggle-width, 36px);
  display: inline-block;
  line-height: 0;
  border-radius: var(--toggle-radius, 10px);
  transition: background 185ms;
  --bg: var(--casper);
  --bg-hover: var(--waterloo);
}
.toggle::before {
  display: inline-block;
  content: "";
  position: absolute;
  width: var(--toggle-before-width, 14px);
  height: var(--toggle-before-height, 14px);
  border-radius: 10px;
  background: #fff;
  transition: transform 185ms;
  left: var(--toggle-before-icon-left, 3px);
  top: var(--toggle-before-icon-top, 3px);
}

<<<<<<< HEAD
:global(.toggle-icon-13t7uv) {
=======
:global(.toggle-icon-1QVIeg) {
>>>>>>> 7a01f87f5ef161038b1901bf4d9fb36cee23e677
  margin: var(--toggle-icon-margin, 0);
}

.isActive {
  --bg: var(--green);
  --bg-hover: var(--green-hover);
}
.isActive::before {
  transform: var(--toggle-before-active, translateX(calc(100% + 2px)));
}

.disabled {
  background: var(--porcelain) !important;
  pointer-events: none !important;
}</style>
