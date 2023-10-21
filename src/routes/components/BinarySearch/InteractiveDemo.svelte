<script>
  import InfoPane from "~/common/components/InfoPane.svelte"
  import NumberNode from "~/common/components/NumberNode.svelte"

  export let displayed_look_up_number = undefined
  export let displayed_sorted_numbers = []
  export let displayed_results = []

  const final_step_count = displayed_results.reduce(
    (acc, current) => Math.max(acc, current.count),
    0,
  )

  let current_entry_index = 0
  let current_entry = displayed_results[current_entry_index]

  const has_previous = () => {
    return current_entry_index > 0
  }

  const has_next = () => {
    return current_entry_index < displayed_results.length - 1
  }

  const increment_index = () => {
    if (has_next()) {
      current_entry_index++
      current_entry = displayed_results[current_entry_index]
    } else {
      console.error("No more steps can be taken")
    }
  }

  const decrement_index = () => {
    if (has_previous()) {
      current_entry_index--
      current_entry = displayed_results[current_entry_index]
    } else {
      console.error("No more steps can be taken")
    }
  }

  const generateStepText = (_entry) => {
    const placement = _entry.at_end_of_step ? "end" : "start"
    const step_count = _entry.count + 1
    const open = displayed_sorted_numbers[_entry.window_open]
    const close = displayed_sorted_numbers[_entry.window_close]

    const is_start_of_first_step = (_entry.count === 0) & !_entry.at_end_of_step
    const is_last_end_of_final_step =
      _entry.count === final_step_count && _entry.at_end_of_step

    if (is_start_of_first_step) {
      return `At the <span class="font-bold">start</span> of step <span class="font-bold">${step_count}</span> we haven't done any work to establish which numbers are possible guesses or where our current window is. All we know for sure is that we have a collection of sorted numbers between ${open} & ${close}. We are going to make a guess in the direct middle of this range at index ${_entry.current_half_way_index} (the value there btw is ${_entry.current_half_way_value}). Click "Next" to see what happens next.`
    }

    if (is_last_end_of_final_step) {
      if (_entry.desired_item_spot) {
        return `At the <span class="font-bold">end</span> of step <span class="font-bold">${step_count}</span> we find that our current guess of ${_entry.current_half_way_value} and our desired value of ${displayed_look_up_number} are equal and thus we have found our desired number located at index: ${_entry.current_half_way_index}`
      } else {
        return `At the <span class="font-bold">end</span> of step <span class="font-bold">${step_count}</span> we have examined every potential value and determined that no where in the provided collection of numbers does the number ${displayed_look_up_number} exist.`
      }
    }

    if (_entry.at_end_of_step) {
      const down_fragement =
        _entry.window_open > 0
          ? `below ${displayed_sorted_numbers[_entry.window_open]}`
          : ""

      const up_fragment =
        _entry.window_close < displayed_sorted_numbers.length - 1
          ? `above ${displayed_sorted_numbers[_entry.window_close]}`
          : ""

      const and = !!down_fragement && !!up_fragment ? " and " : ""
      const bounds_fragment = `${down_fragement}${and}${up_fragment}`

      const lt_gt_fragment =
        _entry.current_half_way_value > displayed_look_up_number
          ? `greater than ${displayed_look_up_number}`
          : `less than ${displayed_look_up_number}`

      return `At the <span class="font-bold">end</span> of step <span class="font-bold">${step_count}</span> we evaluate if our current guess is greater than or less than our desired value. In this case ${_entry.current_half_way_value} is ${lt_gt_fragment}. So the range of numbers we can look for our desired number in must be between ${open} & ${close} and so we close off the numbers ${bounds_fragment}.`
    }

    return `At the <span class="font-bold">${placement}</span> of step <span class="font-bold">${step_count}</span> the range of numbers we know our number can be between are ${open} & ${close} and so we make a guess in the middle at ${_entry.current_half_way_value}`
  }
</script>

<InfoPane _id="demo">
  <h1 class="text-3xl font-light mb-2">Interactive Demonstration</h1>
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
    {#each displayed_results as entry, i}
      {#if current_entry_index >= i}
        <div class="mt-7">
          <p>{@html generateStepText(entry)}</p>
          <div id="data" class="flex-col mt-1 pb-6 bg-slate-600 rounded-md">
            <div class="p-1 text-slate-200">
              <small>Step: {entry.count + 1}</small>
            </div>
            <div class="w-1/2 mx-auto">
              {#each displayed_sorted_numbers as num, i}
                {#if Number.isInteger(entry.window_open) && i >= entry.window_open && i <= entry.window_close}
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
                    <NumberNode
                      n={num}
                      tw_bg_class="bg-black"
                      candidate={false}
                    />
                  </div>
                {/if}
              {/each}
            </div>
          </div>
        </div>
      {/if}
    {/each}
    <div class="mt-5">
      <button
        on:click={decrement_index}
        class="transition ease-in-out delay-10 bg-cyan-500 hover:-translate-y-.25 hover:scale-105 duration-300 text-white p-4 mr-4 rounded-md"
        >Previous</button
      >
      <button
        on:click={increment_index}
        disabled={!has_next()}
        class="transition ease-in-out delay-10 bg-cyan-500 hover:-translate-y-.25 hover:scale-105 duration-300 text-white p-4 mr-4 rounded-md"
        >Next</button
      >
    </div>
  </div>
</InfoPane>
