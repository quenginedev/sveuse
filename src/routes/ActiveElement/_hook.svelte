<div>
<pre><code>{`<script>
    import {useActiveElement} from "sveuse";
    const activeElement = useActiveElement();
    const inputValues = [1,2, 3, 4, 5];
</script>

<div>
    {#each inputValues as inputValue}
        <input type="text" value={inputValue} />
    {/each}
</div>

<p>Active element: { $activeElement && $activeElement.value}</p>`}</code></pre>
</div>
