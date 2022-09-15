<script>import { setContext } from 'svelte';
export let id;
export let on;
export let setTrigger, startOpenTimer, destroy;
export let props;
export let ref;
let trigger;

function onEvent({
  currentTarget
}) {
  trigger = currentTarget;
  props = trigger.__props__;
  setTrigger(trigger);
  startOpenTimer();
}

ref.tooltip = (node, data) => {
  node.removeEventListener(on, onEvent);
  if (data.isEnabled === false) return;
  node.__props__ = data;
  node.addEventListener(on, onEvent);
  return {
    update(data) {
      node.__props__ = data;
      if (node === trigger) props = data;
    },

    destroy() {
      if (node !== trigger) return;
      trigger = null;
      setTrigger(null);
      destroy();
    }

  };
};

setContext(id, ref.tooltip);</script>

<slot />
