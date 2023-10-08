<script>
  export let _id = "default-id"
</script>

<div
  id={_id}
  class="w-full mb-7 mt-5 py-6 px-10 rounded-lg bg-white/25 backdrop-blur-xl shadow-md hover:shadow-lg text-slate-700"
>
  <slot />
</div>
