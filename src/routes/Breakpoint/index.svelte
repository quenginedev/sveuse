<script>
    import {useBreakpoint} from "$lib";
    import Example from "../../utils/components/Example.svelte";
    import Hook from './_hook.svelte'
    const breakpoints = {xs: 320, sm: 576, md: 768, lg: 992, xl: 1200}
    const {greater} = useBreakpoint(breakpoints)
    const fields = Object.keys(breakpoints)
    const {xs, sm, md, lg, xl} = fields.reduce((queries, field) => {
        queries[field] = greater(field)
        return queries
    }, {})
</script>

<Example title="Breakpoint">
    <h1 class="font-bold text-xl">Greater than</h1>
    <p class="mb-5">Adjust your screen to see the changes</p>
    <div class="flex flex-row flex-wrap gap-10">
        <div>xs:{$xs}</div>
        <div>sm:{$sm}</div>
        <div>md:{$md}</div>
        <div>lg:{$lg}</div>
        <div>xl:{$xl}</div>
    </div>
    <Hook slot="hook"></Hook>
</Example>

