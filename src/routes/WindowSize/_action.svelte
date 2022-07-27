<div>
        <pre>
            {`
<script>
    import {onWindowSize} from "sveuse";
    const onResize = console.log
</script>
<div use:onWindowSize={{onResize}}></div>

//Or

<script>
    import {onWindowSize} from "sveuse";
    const handleResizeEvent = size => {
        console.log(size.detail)
    }
</script>
<div use:onWindowSize on:resize={handleResizeEvent}></div>`}
        </pre>
</div>