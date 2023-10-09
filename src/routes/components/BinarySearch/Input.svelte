<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  import InfoPane from "~/common/components/InfoPane.svelte"

  export let look_up_number = undefined
  export let sorted_numbers = []
  export let submit = () =>
    dispatch("submit", { look_up_number, sorted_numbers })
</script>

<InfoPane _id="input">
  <h1 class="text-3xl font-light mb-2">Input</h1>
  <p>
    The following fields allow you to interact with the algorithm. In the
    "Sorted Numbers" field please insert numbers sorted from low to high
    separated by commas. Ex: "1, 2, 3". In the "Number To Find" field please
    insert a number you want to algorithm to search for. Ex: "2".
  </p>
  <div class="my-4">
    <label class="block" for="sorted_numbers">Sorted Numbers:</label>
    <input
      id="sorted_numbers"
      class="block p-3 w-full md:w-1/2 rounded-sm bg-white/70 backdrop-blur-xl"
      type="text"
      bind:value={sorted_numbers}
    />
  </div>
  <div class="my-4">
    <label class="block" for="number_to_find">Number To Find:</label>
    <input
      bind:value={look_up_number}
      class="block p-3 w-full md:w-1/2 rounded-sm bg-white/70 backdrop-blur-xl"
      type="number"
    />
  </div>
  <div class="mt-1">
    <button
      on:click={submit}
      class="transition ease-in-out delay-10 bg-cyan-500 hover:-translate-y-.25 hover:scale-105 duration-300 text-white p-4 rounded-md"
      >Submit</button
    >
  </div>
</InfoPane>
