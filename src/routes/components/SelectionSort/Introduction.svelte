<script>
  import InfoPane from "~/common/components/InfoPane.svelte"
</script>

<InfoPane _id="introduction">
  <h1 class="text-3xl font-light mb-2">SELECTION SORT</h1>
  <p class="mb-4">
    The Selection Sort sorting algorithm is a simple to understand, but not very
    efficient method of sorting. The core princicple is that you iterate over a
    set of numbers once for each number in the set and each time you extract and
    move the highest number form the set of numbers and move it sequentially to
    as new set of what are now sorted numbers (highest to lowest). The process
    might looks like this:
  </p>
  <pre>Unsorted Numbers [5,2,8] - Sorted Numbers []</pre>
  <pre>Unsorted Numbers [5,2] - Sorted Numbers [8]</pre>
  <pre>Unsorted Numbers [2] - Sorted Numbers [8, 5]</pre>
  <pre>Unsorted Numbers [] - Sorted Numbers [8, 5, 2]</pre>
</InfoPane>
