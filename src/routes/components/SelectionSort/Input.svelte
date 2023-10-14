<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  import InfoPane from "~/common/components/InfoPane.svelte"
</script>

<InfoPane _id="input">
  <h1 class="text-3xl font-light mb-2">Input</h1>
</InfoPane>
