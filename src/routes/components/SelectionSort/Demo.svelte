<script>
  import InfoPane from "~/common/components/InfoPane.svelte"
  import NumberNode from "~/common/components/NumberNode.svelte"

  export let displayed_results = []
  console.log(displayed_results)
</script>

<InfoPane _id="demo">
  <h1 class="text-3xl font-light mb-2">Demonstration</h1>
  <div>
    {#each displayed_results.steps as step, i}
      <div
        id="data"
        data-testid="result-entry"
        class="flex-col mt-7 p-6 bg-slate-600 rounded-md text-slate-200"
      >
        <p class="font-bold">Step {i + 1}</p>

        <div class="flex justify-around">
          <div
            class="flex-col align-middle justify-center bg-slate-800 rounded-lg p-8 w-36 text-center"
          >
            <p class="pb-3">Original</p>

            {#each step.current_items as current_item, i}
              <div class="mb-2 flex flex-col items-center justify-center">
                <NumberNode n={current_item} />
              </div>
            {/each}
          </div>

          <div
            class="flex-col align-middle justify-center bg-slate-800 rounded-lg p-8 w-36 text-center"
          >
            <p class="pb-3">Sorted</p>

            {#each step.current_sorted_items as current_sorted_item, i}
              <div class="mb-2 flex flex-col items-center justify-center">
                <div>
                  <NumberNode n={current_sorted_item} choice={true} />
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      {#if displayed_results.steps.length - 1 === i}
        <div
          id="data"
          data-testid="result-entry"
          class="flex-col mt-7 p-6 bg-slate-600 rounded-md text-slate-200"
        >
          <p class="font-bold">Step {i + 2}</p>
          <div class="flex justify-around">
            <div
              class="flex-col align-middle justify-center bg-slate-800 rounded-lg p-8 w-36 text-center"
            >
              <p class="pb-3">Original</p>
              <!-- Final Step Hack -->
            </div>

            <div
              class="flex-col align-middle justify-center bg-slate-800 rounded-lg p-8 w-36 text-center"
            >
              <p class="pb-3">Sorted</p>

              {#each step.ending_sorted_items as ending_sorted_item, i}
                <div class="mb-2 flex flex-col items-center justify-center">
                  <div>
                    <NumberNode n={ending_sorted_item} choice={true} />
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</InfoPane>
