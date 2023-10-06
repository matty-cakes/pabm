<script>
  import { link } from "svelte-spa-router"
</script>

<header
  class="bg-white/30 backdrop-blur-xl text-gray-600 body-font shadow-sm mb-2"
>
  <div class="flex flex-col items-center md:flex-row md:justify-between p-5">
    <a
      class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      href="/"
    >
      <h2 class="ml-3 text-2xl">
        <img class="max-h-9" src="/src/public/pretty-robot.png" alt="" />
      </h2>
    </a>
    <nav class="flex flex-wrap items-center justify-center">
      <a class="mx-2 md:mr-5" use:link href="/" name="navigation">Home</a>
      <a class="mx-2 md:mr-5" use:link href="/about" name="navigation">About</a>
    </nav>
  </div>
</header>
