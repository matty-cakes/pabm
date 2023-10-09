<script>
  import InfoPane from "~/common/components/InfoPane.svelte"
  export let displayed_look_up_number = undefined
  export let displayed_found = false
  export let displayed_results = []
</script>

<InfoPane _id="conclusion">
  <h1 class="text-3xl font-light mb-2">Conclusion</h1>
  {#if displayed_found}
    <p>
      The value <span class="font-bold">{displayed_look_up_number}</span> was
      found at index
      <span class="font-bold"
        >{displayed_results[displayed_results.length - 1]
          .desired_item_spot}</span
      >
    </p>
  {:else}
    <p>
      The value {displayed_look_up_number} was found
      <span class="font-bold">not</span> found in the collection.
    </p>
  {/if}
</InfoPane>
