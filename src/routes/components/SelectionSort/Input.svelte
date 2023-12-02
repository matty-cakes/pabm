<script>
  import { createEventDispatcher } from "svelte"
  import InfoPane from "~/common/components/InfoPane.svelte"

  const dispatch = createEventDispatcher()

  export let unsorted_numbers = []

  console.log(unsorted_numbers)

  export let submit = () =>
    dispatch("submit", {
      unsorted_numbers,
      _type: "submit",
    })
</script>

<InfoPane _id="input">
  <h1 class="text-3xl font-light mb-2">Input</h1>
  <p>
    The following field allows you to insert a set of unsorted number for
    sorting. Feel free to add comma speparated numbers and click submit to watch
    them get sorted by the Selection Sort algorithm.
  </p>
  <div class="my-4">
    <label class="block" for="sorted_numbers">Unsorted Numbers:</label>
    <input
      id="unsorted_numbers"
      class="block p-3 w-full md:w-1/2 rounded-sm bg-white/70 backdrop-blur-xl"
      type="text"
      bind:value={unsorted_numbers}
    />
  </div>

  <div class="mt-1">
    <button
      on:click={submit}
      class="transition ease-in-out delay-10 bg-cyan-500 hover:-translate-y-.25 hover:scale-105 duration-300 text-white mr-2 p-4 rounded-md"
      >Submit</button
    >
  </div>
</InfoPane>
