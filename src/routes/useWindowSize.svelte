<script>
    import {WindowSize} from "$lib";
    import Example from "../utils/components/Example.svelte";
</script>

<Example title="UseWindowSize">
    <div class="flex flex-col gap-5">
        <p>Reactive window size</p>
        <h1 class="text-2xl font-bold">Demo</h1>
        <WindowSize let:width={width} let:height={height}>
            <p>{width} X {height}</p>
        </WindowSize>
    </div>
    <div slot="hook">
        <pre>
            {`
<script>
    import {useWindowSize} from 'svelte-use'
    const {width, height} = useWindowSize()
</script>

<p>width: {$width}</p>
<p> height: {$height}</p>
        `}
        </pre>
    </div>
    <div slot="component">
        <pre>
            {`
<script>
    import {WindowSize} from "svelte-use";
</script>

<WindowSize let:width={width} let:height={height}>
    <p>width: {width}</p>
    <p> height: {height}</p>
</WindowSize>
            `}
        </pre>
    </div>
    <div slot="action">
        <pre>
            {`
<script>
    import {onWindowSize} from "svelte-use";
    const handleSize = (size) => {
        console.log({size})
    }
</script>

<div use:onWindowSize={{onResize: handleSize}}></div>
            `}
        </pre>
    </div>
</Example>
