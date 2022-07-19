<script>
	import { useActiveElement } from "svelteuse/hooks";

	let activeElement = useActiveElement()
	let isPreview = true;
</script>
<div class="p-5 flex flex-col gap-5">
  <h1 class="font-bold text-2xl">useActiveElement</h1>
  <div class="tabs tabs-boxed">
    <button class="tab" class:tab-active={isPreview} on:click={()=>isPreview = true}>Preview</button>
    <button class="tab" class:tab-active={!isPreview} on:click={()=>isPreview = false}>Code</button>
  </div>
  <div class="mockup-code">
    <!-- language: javascript -->
    {#if isPreview}
      <div class="p-5">
        <h3 class="text-xl font-bold mb-10">Preview </h3>
        <div class="grid grid-cols-3 gap-5">
          {#each [1, 2, 3, 4, 5, 6] as i}
            <input type="text" value={i} placeholder={1} class="input w-full max-w-xs text-center"/>
          {/each}
        </div>
        <div class="mt-10">
          current active element: {$activeElement?.value || 'no active element selected'}
        </div>
      </div>
    {:else}
      <pre>
      <code>
{`
  <script>
    import { useActiveElement } from "svelteuse/hooks";
    let activeElement = useActiveElement()
  </script>

  <div>
    {#each [1, 2, 3, 4, 5, 6] as i}
      <input type="text" value={i} placeholder={1} class="input w-full max-w-xs text-center"/>
    {/each}
  </div>
  <p>current active element: {$activeElement?.value}</p>
`}
      </code>
    </pre>
    {/if}
  </div>
</div>