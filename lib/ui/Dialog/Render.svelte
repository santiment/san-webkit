<script>import { getAllContexts } from 'svelte';
export let Component;
export let props;
export let i;
if (props.CTX) {
    const CTX = getAllContexts();
    const capturedCtx = props.CTX;
    capturedCtx.forEach((value, key) => {
        CTX.set(key, value);
    });
}
</script>

<svelte:component this={Component} {...props} {i} />
