<pre>
    <code>{`
<script>
    import {Breakpoint} from "sveuse";
    const breakpoints = {xs: 320, sm: 576, md: 768, lg: 992, xl: 1200}
</script>
<Breakpoint {breakpoints} gt={['md', 'lg']} let:gt={gtStore}>
    <p>md: gtStore.md</p>
    <p>lg: gtStore.lg</p>
</Breakpoint>
    `}</code>
</pre>