<div>
<pre><code>{`<script>
    import {ActiveElement} from "sveuse";
    const inputValues = [1,2, 3, 4, 5];
</script>

<div>
    {#each inputValues as inputValue}
        <input type="text" value={inputValue} />
    {/each}
</div>

<ActiveElement let:active={active}>
    <p>Active element: { active && active.value}</p>
</ActiveElement>`}</code></pre>
</div>