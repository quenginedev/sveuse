<div>
<pre><code>
{`<script>
    import {onActiveElement} from "sveuse";
    const handleActiveElement = ({detail: activeElement})=>{
        console.log(activeElement);
    }
</script>
<div use:onActiveElement on:active={handleActiveElement}></div>

//Or

<script>
    import {onActiveElement} from "sveuse";
    const handleActiveElement = ({detail: activeElement})=>{
        console.log(activeElement);
    }
</script>
<div use:onActiveElement={{onActive: console.log}}></div>`}
</code></pre>
</div>