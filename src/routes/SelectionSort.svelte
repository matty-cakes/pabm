<script>
  const DEBUG = false
  const debug_log = (v) => (DEBUG ? console.log(v) : null)

  import selection_sort from "~/lib/algorithms/selection_sort.js"
  import { isNumbers, isSorted } from "~/lib/util/validators.js"
  import InfoPane from "~/common/components/InfoPane.svelte"

  let unsorted_numbers = [45, 59, 12, 87]
  let results = selection_sort(unsorted_numbers)

  let displayed_unsorted_numbers = unsorted_numbers
  let displayed_results = results

  const submit = (e) => {
    console.log("submitted")
  }
</script>

<InfoPane _id="introduction">
  <h1 class="text-3xl font-light mb-2">SELECTION SORT</h1>
  <h2>Results</h2>
  <pre>{JSON.stringify(displayed_results, null, 2)}</pre>
</InfoPane>
