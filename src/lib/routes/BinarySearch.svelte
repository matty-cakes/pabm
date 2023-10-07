<script>
  const DEBUG = false
  const debug_log = (v) => (DEBUG ? console.log(v) : null)

  import { onMount } from "svelte"
  import binary_search from "../algorithms/binary_search"
  import NumberNode from "../components/NumberNode.svelte"

  let sorted_numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 15, 16, 17, 18, 19, 20,
  ]
  let look_up_number = 18
  let results = []
  let found = false

  let displayed_sorted_numbers = sorted_numbers
  let displayed_look_up_number = look_up_number
  let displayed_results = results
  let displayed_found = found

  onMount(() => {
    results = binary_search(displayed_sorted_numbers, displayed_look_up_number)
    found = Number.isInteger(results[results.length - 1].desired_item_spot)
    debug_log(`The result is: ${results[results.length - 1].desired_item_spot}`)
  })

  const isSorted = (arr) => arr.every((v, i, a) => !i || a[i - 1] <= v)
  const isNumbers = (arr) => arr.every((el) => Number.isInteger(el))

  const submit = () => {
    sorted_numbers = Array.isArray(sorted_numbers)
      ? sorted_numbers
      : sorted_numbers.split(",").map((n) => parseInt(n.trim()))

    if (!isNumbers(sorted_numbers) || !isSorted(sorted_numbers)) {
      alert(`only sorted numbers allowed in the sorted numbers collection`)
      sorted_numbers = displayed_sorted_numbers
      look_up_number = displayed_look_up_number
      return
    }

    if (!Number.isInteger(parseInt(look_up_number))) {
      alert(`only numbers allowed to be lookup numbers`)
      sorted_numbers = displayed_sorted_numbers
      look_up_number = displayed_look_up_number
      return
    }

    results = binary_search(sorted_numbers, look_up_number)
    found = Number.isInteger(results[results.length - 1].desired_item_spot)

    displayed_sorted_numbers = sorted_numbers
    displayed_look_up_number = look_up_number
    displayed_results = results
    displayed_found = found
  }
</script>

<div>
  <div
    id="introduction"
    class="w-full mb-7 mt-5 py-6 px-3 rounded-lg bg-white/30 backdrop-blur-xl shadow-md hover:shadow-lg"
  >
    <h1 class="text-3xl font-light mb-2">Binary Search</h1>
    <p>
      Binary search is a searching algorthim that attempts to narrow down the
      placement of an item in sorted list by successively searching at the
      center of collection and determining by half the size each iteration how
      close the current mid-way point is to the desired item.
    </p>
  </div>

  <div
    id="input"
    class="w-full mb-7 mt-5 py-6 px-3 rounded-lg bg-white/30 backdrop-blur-xl shadow-md hover:shadow-lg"
  >
    <h1 class="text-3xl font-light mb-2">Input</h1>
    <p>
      The following fields allow you to interact with the algorithm. In the
      "Sorted Numbers" field please insert numbers sorted from low to high
      separated by commas. Ex: "1, 2, 3". In the "Number To Find" field please
      insert a number you want to algorithm to search for. Ex: "2".
    </p>
    <div class="my-4">
      <label for="sorted_numbers">Sorted Numbers:</label>
      <input
        id="sorted_numbers"
        class="p-2 w-1/2"
        type="text"
        bind:value={sorted_numbers}
      />
    </div>
    <div class="my-4">
      <label for="number_to_find">Number To Find:</label>
      <input bind:value={look_up_number} class="p-2" type="text" />
    </div>
    <div class="mt-1">
      <button on:click={submit} class="transition ease-in-out delay-10 bg-cyan-500 hover:-translate-y-.25 hover:scale-105 duration-300 text-white p-4 rounded-md "
        >Submit</button
      >
    </div>
  </div>

  <div
    id="demo"
    class="w-full my-2 py-6 px-3 rounded-lg bg-white/30 backdrop-blur-xl shadow-md hover:shadow-lg"
  >
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
      {#each results as entry}
        <!-- <pre>{JSON.stringify(entry, null, 2)}</pre> -->

        <div id="data" class="flex-col mt-7 pb-6 bg-slate-600 rounded-md">
          <div class="p-1 text-slate-200">
            <small>Step: {entry.count + 1}</small>
          </div>
          <div class="w-1/2 mx-auto">
            {#each sorted_numbers as num, i}
              {#if Number.isInteger(entry.last_window_open) && i >= entry.last_window_open && i <= entry.last_window_close}
                {#if i === entry.current_half_way_index}
                  <div class="inline-block m-2">
                    <NumberNode n={num} tw_bg_class="bg-green-600" candidate={true} choice={true} desired_item={entry.desired_item_spot == entry.current_half_way_index} />
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
  </div>

  <div
    id="conclusion"
    class="w-full mb-7 mt-5 py-6 px-3 rounded-lg bg-white/30 backdrop-blur-xl shadow-md hover:shadow-lg"
  >
    <h1 class="text-3xl font-light mb-2">Conclusion</h1>
    {#if found}
      <p>
        The value <span class="font-bold">{look_up_number}</span> was found at
        index
        <span class="font-bold"
          >{results[results.length - 1].desired_item_spot}</span
        >
      </p>
    {:else}
      <p>
        The value {look_up_number} was found <span class="font-bold">not</span> found
        in the collection.
      </p>
    {/if}
  </div>
</div>
