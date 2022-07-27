<script>
    import {ActiveElement} from "$lib";
    import Example from "../../utils/components/Example.svelte";
    import Hook from './_hook.svelte'
    import Component from './_component.svelte'
    import Action from './_action.svelte'

    const inputValues = [1, 2, 3, 4, 5];
</script>

<Example title="WindowSize" currentPage="example">
    <div class="flex flex-col gap-5">
        <p>Reactive <i class="bg-base-100 text-sm p-2 rounded">document.activeElement</i></p>
        <h1 class="text-2xl font-bold">Demo</h1>
        <p>Select the input below to see the changes</p>
        <div class="grid grid-cols-3 gap-5">
            {#each inputValues as inputValue}
                <input class="px-5 py-2 rounded bg-base-100 text-white" type="text" value={inputValue}/>
            {/each}
        </div>
        <ActiveElement let:active={active}>
            <p>Active element: { active && active.value}</p>
        </ActiveElement>
    </div>
    <Hook slot="hook"/>
    <Component slot="component"/>
    <Action slot="action"/>
</Example>
