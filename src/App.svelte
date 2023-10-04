<script>
  import Router, { link } from "svelte-spa-router"

  // Shared Layout Components
  import NavBar from "./lib/components/NavBar.svelte"

  // Routes
  import Home from "./lib/routes/Home.svelte"
  import NotFound from "./lib/routes/NotFound.svelte"
  import BinarySearch from "./lib/routes/BinarySearch.svelte"
  import About from "./lib/routes/About.svelte"

  const routes = {
    "/": Home,
    "/about": About,
    "/binary-search": BinarySearch,
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
