<script>
	import { useActiveElement } from "svelteuse/hooks";

	let activeElement = useActiveElement()
	let tab = 'hook';
</script>
<div class="p-5 flex flex-col gap-5">
  <h1 class="font-bold text-2xl">useActiveElement</h1>
  <div class="tabs tabs-boxed">
    <button class="tab" class:tab-active={tab === 'preview'} on:click={()=>tab = 'preview'}>Preview</button>
    <button class="tab" class:tab-active={tab === 'hook'} on:click={()=>tab = 'hook'}>Hook Example</button>
    <button class="tab" class:tab-active={tab === 'component'} on:click={()=>tab = 'component'}>Component Example
    </button>
  </div>
  <div class="mockup-code">
    <!-- language: javascript -->
    {#if tab === 'preview'}
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
    {:else if tab === 'hook'}
      <pre>
        <code>
          {`
  <script>
    import { useActiveElement } from "svelteuse/hooks";
    let activeElement = useActiveElement()
  </script>

  <div>
    {#each [1, 2, 3, 4, 5, 6] as i}
      <input
        type="text"
        value={i}
        placeholder={1}
        class="input w-full max-w-xs text-center"
      />
    {/each}
  </div>
  <p>current active element: {$activeElement?.value}</p>
        `}
      </code>
    </pre>
    {/if}
  </div>
</div>