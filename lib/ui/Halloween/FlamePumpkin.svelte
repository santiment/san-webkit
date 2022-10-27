<script>let className = '';
export { className as class };
export let small = false;</script>

<div class="relative {className}" class:small on:click>
  <img src="{process.env.MEDIA_PATH}/illus/halloween/flame.svg" alt="Flame" />
  <span>🎃</span>
</div>

<style >img {
  width: 116px;
  height: 133px;
}

span {
  z-index: 2;
  position: absolute;
  left: 33px;
  bottom: 27px;
  font-size: 48px;
}

.small {
  width: 42px;
  height: 64px;
}
.small img {
  width: 42px;
  height: 58px;
}
.small span {
  left: 10px;
  bottom: 7px;
  font-size: 24px;
}</style>
