<script>
    import {WindowSize} from "$lib";
    import Example from "../../utils/components/Example.svelte";
    import Hook from './_hook.svelte'
    import Component from './_component.svelte'
    import Action from './_action.svelte'
</script>

<Example title="WindowSize">
    <div class="flex flex-col gap-5">
        <p>Reactive window size</p>
        <h1 class="text-2xl font-bold">Demo</h1>
        <WindowSize let:width={width} let:height={height}>
            <p>{width} X {height}</p>
        </WindowSize>
    </div>
    <Hook slot="hook"/>
    <Component slot="component"/>
    <Action slot="action"/>
</Example>
