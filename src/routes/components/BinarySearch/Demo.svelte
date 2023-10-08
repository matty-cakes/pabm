<script>
  import InfoPane from "~/common/components/InfoPane.svelte"
  import NumberNode from "~/common/components/NumberNode.svelte"

  export let displayed_look_up_number = undefined
  export let displayed_sorted_numbers = []
  export let displayed_results = []
</script>

<InfoPane _id="demo">
  <h1 class="text-3xl font-light mb-2">Demonstration</h1>
  <p class="mb-5">
    In the following case we want to find the placement of the value <NumberNode
      n={displayed_look_up_number}
    />
    in the collection:
  </p>
  <div class="px-12">
    <div id="data" class="flex-col pb-6 bg-slate-600 rounded-sm">
      <div class="p-1 text-slate-200">
        <small>Starting Collection</small>
      </div>
      <div class="w-1/2 mx-auto">
        {#each displayed_sorted_numbers as number}
          <div class="inline-block m-2"><NumberNode n={number} /></div>
        {/each}
      </div>
    </div>
  </div>

  <div class="px-12">
    {#each displayed_results as entry}
      <div id="data" class="flex-col mt-7 pb-6 bg-slate-600 rounded-md">
        <div class="p-1 text-slate-200">
          <small>Step: {entry.count + 1}</small>
        </div>
        <div class="w-1/2 mx-auto">
          {#each displayed_sorted_numbers as num, i}
            {#if Number.isInteger(entry.last_window_open) && i >= entry.last_window_open && i <= entry.last_window_close}
              {#if i === entry.current_half_way_index}
                <div class="inline-block m-2">
                  <NumberNode
                    n={num}
                    tw_bg_class="bg-green-600"
                    candidate={true}
                    choice={true}
                    desired_item={entry.desired_item_spot ==
                      entry.current_half_way_index}
                  />
                </div>
              {:else}
                <div class="inline-block m-2">
                  <NumberNode candidate={true} n={num} />
                </div>
              {/if}
            {:else}
              <div class="inline-block m-2">
                <NumberNode n={num} tw_bg_class="bg-black" candidate={false} />
              </div>
            {/if}
          {/each}
        </div>
      </div>
    {/each}
  </div>
</InfoPane>
