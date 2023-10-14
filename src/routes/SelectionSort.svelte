<script>
  const DEBUG = false
  const debug_log = (v) => (DEBUG ? console.log(v) : null)

  import selection_sort from "~/lib/algorithms/selection_sort.js"
  import { isNumbers, isSorted } from "~/lib/util/validators.js"
  import Demo from "~/routes/components/SelectionSort/Demo.svelte"
  import Conclusion from "~/routes/components/SelectionSort/Conclusion.svelte"
  import Introduction from "~/routes/components/SelectionSort/Introduction.svelte"
  import Input from "~/routes/components/SelectionSort/Input.svelte"

  let unsorted_numbers = [45, 59, 12, 87]
  let results = selection_sort(unsorted_numbers)

  let displayed_unsorted_numbers = unsorted_numbers
  let displayed_results = results

  const submit = (e) => {
    console.log("submitted")
  }
</script>

<div>
  <Introduction />
  <Demo {displayed_results} />
</div>
