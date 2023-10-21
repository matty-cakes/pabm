<script>
  const DEBUG = true
  const debug_log = (v) => (DEBUG ? console.log(v) : null)

  import binary_search from "~/lib/algorithms/binary_search.js"
  import Demo from "~/routes/components/BinarySearch/Demo.svelte"
  import InteractiveDemo from "./components/BinarySearch/InteractiveDemo.svelte"
  import Conclusion from "~/routes/components/BinarySearch/Conclusion.svelte"
  import Introduction from "~/routes/components/BinarySearch/Introduction.svelte"
  import Input from "~/routes/components/BinarySearch/Input.svelte"

  let sorted_numbers = [
    2, 3, 3, 4, 5, 6, 7, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 23, 28,
  ]
  let look_up_number = 18
  let results = binary_search(sorted_numbers, look_up_number)
  let found = Number.isInteger(results[results.length - 1].desired_item_spot)

  let interactive = false

  let displayed_sorted_numbers = sorted_numbers
  let displayed_look_up_number = look_up_number
  let displayed_results = interactive
    ? results
    : results.filter((r) => r.at_end_of_step)
  let displayed_found = found

  const isSorted = (arr) => arr.every((v, i, a) => !i || a[i - 1] <= v)
  const isNumbers = (arr) => arr.every((el) => Number.isInteger(el))

  // every {} is unique, {} === {} evaluates to false
  // I think this is a hack... I should not need to do this...
  // In any case `unique` acts as a key that tells my interactive demonstration to
  // "start from the top" and not simply replace the inline state...
  let unique = {}
  function reset() {
    unique = {}
  }

  const submit = (e) => {
    sorted_numbers = Array.isArray(e.detail.sorted_numbers)
      ? e.detail.sorted_numbers
      : e.detail.sorted_numbers.split(",").map((n) => parseInt(n.trim()))

    if (!isNumbers(sorted_numbers) || !isSorted(sorted_numbers)) {
      alert(`only sorted numbers allowed in the sorted numbers collection`)
      sorted_numbers = displayed_sorted_numbers
      look_up_number = displayed_look_up_number
      return
    }

    if (!Number.isInteger(parseInt(e.detail.look_up_number))) {
      alert(`only numbers allowed to be lookup numbers`)
      sorted_numbers = displayed_sorted_numbers
      look_up_number = displayed_look_up_number
      return
    }

    look_up_number = e.detail.look_up_number
    results = binary_search(sorted_numbers, look_up_number)
    found = Number.isInteger(results[results.length - 1].desired_item_spot)

    reset()

    interactive = e.detail._type === "submit-interactive"
    displayed_sorted_numbers = sorted_numbers
    displayed_look_up_number = look_up_number
    displayed_results = interactive
      ? results
      : results.filter((r) => r.at_end_of_step)
    displayed_found = found
  }
</script>

<div>
  <Introduction />

  <Input {look_up_number} {sorted_numbers} on:submit={submit} />

  {#if interactive}
    <!-- We want to be able to reset this item and restart the interactivty. -->
    <!-- This is how I did it: https://stackoverflow.com/a/63737335 -->
    {#key unique}
      <InteractiveDemo
        {displayed_look_up_number}
        {displayed_sorted_numbers}
        {displayed_results}
      />
    {/key}
  {:else}
    <Demo
      {displayed_look_up_number}
      {displayed_sorted_numbers}
      {displayed_results}
    />
  {/if}

  <Conclusion
    {displayed_look_up_number}
    {displayed_results}
    {displayed_found}
  />
</div>
