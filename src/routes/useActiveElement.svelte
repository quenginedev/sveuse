<script>
    import {useActiveElement} from "$lib";
    import Example from "../utils/components/Example.svelte";
    const activeElement = useActiveElement();
    const inputValues = [1,2, 3, 4, 5];
</script>

<Example title="UseWindowSize" currentPage="example">
    <div class="flex flex-col gap-5">
        <p>Reactive <i class="bg-base-100 text-sm p-2 rounded">document.activeElement</i></p>
        <h1 class="text-2xl font-bold">Demo</h1>
        <p>Select the input below to see the changes</p>
        <div class="grid grid-cols-3 gap-5">
            {#each inputValues as inputValue}
                <input class="px-5 py-2 rounded bg-base-100 text-white" type="text" value={inputValue} />
            {/each}
        </div>
        <p>Active element: { $activeElement && $activeElement.value}</p>
    </div>
    <div slot="hook">
        <pre>
            {`
<script>
    import {useActiveElement} from "svelte-use";
    const activeElement = useActiveElement();
    const inputValues = [1,2, 3, 4, 5];
</script>

<div>
    {#each inputValues as inputValue}
        <input type="text" value={inputValue} />
    {/each}
</div>

<p>Active element: { $activeElement && $activeElement.value}</p>
            `}
        </pre>
    </div>
</Example>
