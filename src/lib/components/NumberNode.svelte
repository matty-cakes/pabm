<script>
  export let n
  export let tw_bg_class = "bg-cyan-500"
  export let tw_text_class = "text-white"
</script>

<span
  class="inline-block w-[2.5rem] text-center p-1 rounded-xl {tw_bg_class} {tw_text_class} hover:shadow-xl hover:font-semibold hover:underline hover:bg-yellow-400 hover:text-black"
>
  {n}
</span>
