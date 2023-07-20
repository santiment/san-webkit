<script lang="ts">
  let className = 'justify'
  export { className as class }
</script>

<div class="setting row v-center {className}">
  <slot />
</div>

<style>
  .setting {
    border-top: 1px solid var(--porcelain);
    padding: 16px 24px;
  }
</style>
