<script>
  const DEBUG = false
  const debug_log = (v) => (DEBUG ? console.log(v) : null)

  import selection_sort, {
    cheap_deep_copy,
  } from "~/lib/algorithms/selection_sort.js"
  import { isNumbers, isSorted } from "~/lib/util/validators.js"
  import Demo from "~/routes/components/SelectionSort/Demo.svelte"
  import Conclusion from "~/routes/components/SelectionSort/Conclusion.svelte"
  import Introduction from "~/routes/components/SelectionSort/Introduction.svelte"
  import Input from "~/routes/components/SelectionSort/Input.svelte"

  let unsorted_numbers = [45, 59, 12, 87]
  let displayed_unsorted_numbers = cheap_deep_copy(unsorted_numbers)

  let results = selection_sort(unsorted_numbers)
  let displayed_results = results

  const submit = (e) => {
    unsorted_numbers = Array.isArray(e.detail.unsorted_numbers)
      ? e.detail.unsorted_numbers
      : e.detail.unsorted_numbers.split(",").map((n) => parseInt(n.trim()))

    if (!isNumbers(unsorted_numbers)) {
      alert(`only sorted numbers allowed in the unsorted numbers collection`)
      unsorted_numbers = displayed_unsorted_numbers
      return
    }

    results = selection_sort(unsorted_numbers)
    displayed_results = results
  }
</script>

<div>
  <Introduction />
  <Input unsorted_numbers={displayed_unsorted_numbers} on:submit={submit} />
  <Demo {displayed_results} />
</div>
