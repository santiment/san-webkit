<script>let className = '';
export { className as class };
export let small = false;
</script>

<button class="relative {className}" class:small on:click>
  <img src="{process.env.MEDIA_PATH}/illus/halloween/flame.svg" alt="Flame" />
  <span>🎃</span>
</button>

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
img {
  width: 116px;
  height: 133px;
}

span {
  z-index: 2;
  position: absolute;
  left: 33px;
  bottom: 27px;
  font-size: 48px;
  transition: all 100ms ease-in-out;
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
}
.small:hover span {
  transform: scale(1.1);
}</style>
