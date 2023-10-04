<script>
  import Router, { link } from "svelte-spa-router"
</script>

<div>
  <div
    id="welcome-and-introduction"
    class="w-full mb-7 mt-5 py-6 px-3 rounded-lg bg-slate-200 shadow-md hover:shadow-lg"
  >
    <h1 class="text-4xl font-bold">PABM 🧮</h1>
    <small>Pretty Alogorithms By Matt</small>
    <h2 class="text-2xl font-bold">What is this?</h2>
    <p>
      This is a site where I will be attempting to use Svelte and Javascript and
      CSS to demonstrate algorithms functionality and behavior. The general idea
      is this:
    </p>
    <ul>
      <li>-- You click a link 🖱️</li>
      <li>-- You look at the demo 👀</li>
      <li>-- You walk over the code 🚶</li>
      <li>-- You understand the algorithm 🤞</li>
    </ul>
  </div>

  <div
    id="index"
    class="w-full mb-7 mt-5 py-6 px-3 rounded-lg bg-slate-200 shadow-md hover:shadow-lg"
  >
    <h2 class="text-2xl font-bold">Alogorithms</h2>
    <ul>
      <li><a href="/binary-search" use:link>-- Binary Search 🔢</a></li>
    </ul>
  </div>
</div>
