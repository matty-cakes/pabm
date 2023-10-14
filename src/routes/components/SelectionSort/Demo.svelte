<script>
  import InfoPane from "~/common/components/InfoPane.svelte"
  import NumberNode from "~/common/components/NumberNode.svelte"

  export let displayed_results = []
</script>

<InfoPane _id="demo">
  <h1 class="text-3xl font-light mb-2">Demonstration</h1>
  <div>
    <!-- <pre>{JSON.stringify(displayed_results, null, 2)}</pre> -->
    <p>Original</p>
    <pre>{JSON.stringify(displayed_results.original_items, null, 2)}</pre>
    <p>Sorted</p>
    <pre>{JSON.stringify(displayed_results.sorted_items, null, 2)}</pre>
    <p>Steps</p>
    {#each displayed_results.steps as step, i}
      <p class="font-bold">Step {i + 1}</p>
      <p>Current Unsorted [{step.current_items}]</p>
      <p>Current Sorted [{step.current_sorted_items}]</p>

      {#each step.entries as entry, j}
        <p>{i + 1}-{j + 1}</p>
        <p>{JSON.stringify(entry, null, 2)}</p>
      {/each}
      <hr class="mb-4" />
      <hr />
    {/each}
  </div>
</InfoPane>
