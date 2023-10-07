<script>
  //hover:font-semibold hover:underline hover:bg-yellow-400 hover:text-black
  export let n
  export let tw_bg_class = "bg-cyan-500"
  export let candidate = true
  export let choice = false
  export let desired_item = false
  export let tw_text_class = "text-white"

  let node_type

  if (candidate) {
    console.log(`candidate: ${candidate}`);
    node_type="candidate_node"
    console.log(node_type);
  } else {
    console.log(`candidate: ${candidate}`);
    node_type="disqualified_node"
    console.log(node_type);
  }

  if (choice) {
    node_type="choice_node"
  }

  const tada =  desired_item ? "🎉" : ""


</script>

<span class="inline-block" >
  <span id="{node_type}"
  class=" flex justify-center items-center w-[2.5rem] h-[2.5rem] text-center p-1 rounded-full text-center {tw_bg_class} {tw_text_class} hover:shadow-xl hover:font-bold"
>
  {n}{#if desired_item}<span id="desired_item_party" class=" absolute w-6 h-6 mb-10 ml-7 text-center p-1 rounded-full hover:text-xl">{"🎉"}</span>{/if}
</span>
</span>


<style>
  #candidate_node {
    background-image: linear-gradient(
    340deg,
    rgb(95, 223, 237) 0%,
    rgb(92, 160, 194)  15%,
    rgb(95, 223, 237) 45%,
    rgb(92, 160, 194)  60%,
    rgb(95, 223, 237) 75%,
    rgb(92, 160, 194) 100%
  );
  background-size: 400% 400%;
  animation: gradient 20s cubic-bezier(0.78, 0.78, 0.58, 1) infinite;
  }

  #disqualified_node {
    background-image: linear-gradient(
    340deg,
    rgb(0,0,0) 0%,
    rgb(61, 44, 70)  15%,
    rgb(0,0,0) 45%,
    rgb(61, 44, 70)  60%,
    rgb(0,0,0) 75%,
    rgb(61, 44, 70) 100%
  );
  background-size: 400% 400%;
  animation: gradient 35s cubic-bezier(0.78, 0.78, 0.58, 1) infinite;
  }

  #choice_node {
    background-image: linear-gradient(
    340deg,
    rgb(48, 178, 67) 0%,
    rgb(51, 152, 95)  15%,
    rgb(48, 178, 67) 45%,
    rgb(51, 152, 95) 60%,
    rgb(48, 178, 67) 75%,
    rgb(51, 152, 95)100%
  );
  background-size: 400% 400%;
  animation: gradient 5s cubic-bezier(0.78, 0.78, 0.58, 1) infinite;
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

span:hover #desired_item_party {
  animation: shake 1.5s ease infinite;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-2px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
}

</style>