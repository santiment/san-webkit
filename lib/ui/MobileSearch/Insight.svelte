<script>export let item;</script>

<div class="wrapper row hv-center">
  <img src="{process.env.MEDIA_PATH}/icons/description-filled.svg" alt="Insights" class="icon" />
</div>
<span class="name line-clamp">{item.title}</span>

<style>
  .name {
    display: block;
  }

  .wrapper {
    min-width: 24px;
    height: 24px;
    background: var(--orange-light-1);
    border-radius: 24px;
    margin-right: 10px;
  }

  .icon {
    width: 11px;
    height: 13px;
  }
</style>
