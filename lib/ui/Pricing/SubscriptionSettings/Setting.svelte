<script>let className = 'justify';
export { className as class };
</script>

<div class="setting row v-center {className}">
  <slot />
</div>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
.setting {
  border-top: 1px solid var(--porcelain);
  padding: 16px 24px;
}

:global(body.phone) .setting, :global(body.phone-xs) .setting {
  padding: 20px 24px;
}</style>
