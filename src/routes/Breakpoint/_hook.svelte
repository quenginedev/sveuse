<div >
    <pre><code>
{`
<script>
    import {useBreakpoint} from "sveuse";
    const breakpoints = {xs: 320, sm: 576, md: 768, lg: 992, xl: 1200}
    const {greater} = useBreakpoint(breakpoints) // {greater, smaller, between}
    const fields = Object.keys(breakpoints)
    const {xs, sm, md, lg, xl} = fields.reduce((queries, field) => {
        queries[field] = greater(field)
        return queries
    }, {})
</script>

<div>
    <div>xs:{$xs}</div>
    <div>sm:{$sm}</div>
    <div>md:{$md}</div>
    <div>lg:{$lg}</div>
    <div>xl:{$xl}</div>
</div>
`}
    </code></pre>
</div>