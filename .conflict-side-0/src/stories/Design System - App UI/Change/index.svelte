<script lang="ts">
  import Change, { percentChange } from '$ui/app/Change/index.js'
</script>

<main class="flex flex-col gap-2 p-4">
  <Change change={-50} />
  <Change change={50} />
  <Change change={percentChange(0.1, -0.2)} />
  <Change change={percentChange(0.5, 0.7)} />
  <Change change={0} />
</main>
