<script lang="ts">
  import Change, { percentChange } from '$ui/app/Change/index.js'
</script>

<Change change={-50} />
<Change change={50} />
<Change change={percentChange(0.1, -0.2)} />
<Change change={percentChange(0.5, 0.7)} />
