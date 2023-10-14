<script>
  const DEBUG = true
  const debug_log = (v) => (DEBUG ? console.log(v) : null)

  import binary_search from "~/lib/algorithms/binary_search.js"
  import Demo from "~/routes/components/BinarySearch/Demo.svelte"
  import Conclusion from "~/routes/components/BinarySearch/Conclusion.svelte"
  import Introduction from "~/routes/components/BinarySearch/Introduction.svelte"
  import Input from "~/routes/components/BinarySearch/Input.svelte"

  let sorted_numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 15, 16, 17, 18, 19, 20,
  ]
  let look_up_number = 18
  let results = binary_search(sorted_numbers, look_up_number)
  let found = Number.isInteger(results[results.length - 1].desired_item_spot)

  let displayed_sorted_numbers = sorted_numbers
  let displayed_look_up_number = look_up_number
  let displayed_results = results.filter((r) => r.at_end_of_step)
  let displayed_found = found

  const isSorted = (arr) => arr.every((v, i, a) => !i || a[i - 1] <= v)
  const isNumbers = (arr) => arr.every((el) => Number.isInteger(el))

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

    displayed_sorted_numbers = sorted_numbers
    displayed_look_up_number = look_up_number
    displayed_results = results.filter((r) => r.at_end_of_step)
    displayed_found = found
  }
</script>

<div>
  <Introduction />

  <Input {look_up_number} {sorted_numbers} on:submit={submit} />

  <Demo
    {displayed_look_up_number}
    {displayed_sorted_numbers}
    {displayed_results}
  />

  <Conclusion
    {displayed_look_up_number}
    {displayed_results}
    {displayed_found}
  />
</div>
