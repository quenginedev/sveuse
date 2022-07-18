<script>
	import { useActiveElement } from "svelteuse/action";
	let activeElement = useActiveElement()
</script>
<div class="">
  {#each [1, 2, 3, 4, 5, 6] as i}
    <input placeholder={i} value={i}/>
  {/each}
  <div>
    current active element: {$activeElement?.value}
  </div>
</div>