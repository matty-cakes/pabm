<script>
  export let n
  export let tw_bg_class = "bg-cyan-500"
  export let tw_text_class = "text-white"
  export let candidate = true
  export let choice = false
  export let desired_item = false

  let node_type

  if (candidate) {
    node_type = "candidate-node"
    if (choice) {
      node_type = "choice-node"
    }
  } else {
    node_type = "disqualified-node"
  }
</script>

<span class="inline-block">
  <span
    id={node_type}
    class="node flex justify-center items-center w-[2.5rem] h-[2.5rem] text-center p-1 rounded-full {tw_bg_class} {tw_text_class} hover:shadow-xl hover:font-bold"
  >
    {n}{#if desired_item}<span
        id="desired-item-party"
        class=" absolute w-6 h-6 mb-10 ml-7 text-center p-1 rounded-full"
        >{"🎉"}</span
      >{/if}
  </span>
</span>

<style>
  .node:hover {
    animation: rock 1s linear infinite;
  }

  @keyframes rock {
    0% {
      transform: rotate(10deg);
    }

    25% {
      transform: rotate(45deg);
    }

    50% {
      transform: rotate(-10deg);
    }

    66% {
      transform: rotate(-45deg);
    }

    100% {
      transform: rotate(10deg);
    }
  }

  #candidate-node {
    background-image: linear-gradient(
      45deg,
      rgb(95 223 237) 0%,
      rgb(123 197 234) 100%
    );
  }

  #disqualified-node {
    background-image: linear-gradient(
      45deg,
      rgb(0 0 0) 0%,
      rgb(61 44 70) 15%,
      rgb(0 0 0) 45%,
      rgb(61 44 70) 60%,
      rgb(0 0 0) 75%,
      rgb(61 44 70) 100%
    );
  }

  #choice-node {
    background-image: linear-gradient(
      -50deg,
      rgb(72 171 87) 0%,
      rgb(50 125 100) 100%
    );
    background-size: 300% 300%;
    animation: gradient 1.5s ease infinite;
  }

  #choice-node:hover {
    animation: gradient 5s ease infinite, rock 1s linear infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  #desired-item-party {
    transition: all 1s ease;
  }

  span:hover #desired-item-party {
    font-size: 2rem;
    margin-bottom: 5rem;
  }
</style>
