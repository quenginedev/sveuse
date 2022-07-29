<pre><code>
{`
<script>
    import {onMediaQuery} from "sveuse";
</script>

<div use:onMediaQuery={query: '(min-width: 768px)'} on:matches={console.log}></div>
`}
</code></pre>