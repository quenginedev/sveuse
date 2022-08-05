<div >
    <pre><code>{`
<script>
    import {useBreakpoint} from "sveuse";
    const breakpoints = {xs: 320, sm: 576, md: 768, lg: 992, xl: 1200}
    const {greater} = useBreakpoint(breakpoints) // {greater, smaller, between}
    const sm = greater('sm')
    const xl = greater('xl')
</script>

<div>
    <div>sm:{$sm}</div>
    <div>xl:{$xl}</div>
</div>`}
    </code></pre>
</div>