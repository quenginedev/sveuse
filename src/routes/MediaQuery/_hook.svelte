<pre><code>
{`<script>
    import {useMediaQuery} from 'sveuse'
    const query = useMediaQuery("(min-width: 768px)");
</script>

<h1>Is width greater than 768px: <span>{$query ? 'yes' : 'no'}</span></h1>
`}
</code></pre>