<script>
  import Router, { link } from "svelte-spa-router"
</script>

<div>
  <div
    id="welcome-and-introduction"
    class="w-full mb-7 mt-5 py-6 px-5 rounded-lg bg-white/30 backdrop-blur-xl shadow-md hover:shadow-lg"
  >
    <div class="flex align-middle">
      <h1 class="text-4xl self-end mr-4">PABM</h1>
      <img class="inline max-h-12" src="/pretty-robot.png" alt="pretty-robot" />
    </div>

    <small>Pretty Alogorithms By Matt</small>
    <div class="mt-5">
      <h2 class="text-2xl">What is this?</h2>
      <p>
        This is a site where I will be attempting to use Svelte and Javascript
        and CSS to demonstrate algorithms functionality and behavior. The
        general idea is this:
      </p>
      <ul class="list-disc mt-3 px-4">
        <li>You click a link 🐭</li>
        <li>You look at the demo 👀</li>
        <li>You walk over the code 🚶</li>
        <li>You understand the algorithm 🤞</li>
      </ul>
    </div>
  </div>

  <div
    id="index"
    class="w-full mb-7 mt-5 py-6 px-5 rounded-lg bg-white/30 backdrop-blur-xl shadow-md hover:shadow-lg"
  >
    <h2 class="text-2xl">Alogorithms</h2>
    <ul class="list-disc px-4">
      <li>
        <a class="text-blue-500" href="/binary-search" use:link>Binary Search 🔢</a>
      </li>
    </ul>
  </div>
</div>
