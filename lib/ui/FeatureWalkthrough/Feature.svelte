<script>export let feature;
$: ({
  title,
  description
} = feature);</script>

<h2 class="body-1 txt-m mrg-m mrg--b">{title}</h2>

<div>
  {@html description}
</div>

<style >h2 {
  margin-right: 30px;
}

div :global(img) {
  border-radius: 4px;
  max-width: 100%;
}</style>
