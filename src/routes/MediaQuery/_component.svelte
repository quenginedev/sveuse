<pre><code>
{`
<script>
    import MediaQuery from 'sveuse'
</script>

<MediaQuery query="(min-width: 768px)" let:matches={matches}>
    <h1>{matches ? 'You are on a desktop' : 'You are on a mobile'}</h1>
</MediaQuery>
`}
</code></pre>