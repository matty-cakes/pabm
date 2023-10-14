<script>
  import Router, { link } from "svelte-spa-router"

  // Shared Layout Components
  import NavBar from "./common/components/NavBar.svelte"

  // Routes
  import Home from "./routes/Home.svelte"
  import NotFound from "./routes/NotFound.svelte"
  import About from "./routes/About.svelte"
  import BinarySearch from "./routes/BinarySearch.svelte"
  import SelectionSort from "./routes/SelectionSort.svelte"

  const routes = {
    "/": Home,
    "/about": About,
    "/binary-search": BinarySearch,
    "/selection-sort": SelectionSort,
    // Catch-all - This is optional, but if present it must be the last
    "*": NotFound,
  }
</script>

<main>
  <NavBar />
  <div class="container mx-auto p-5">
    <Router {routes} />
  </div>
</main>
