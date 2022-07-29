<script>
    import {useMediaQuery} from '$lib'
    export let query = null
    const matches = useMediaQuery(query)
</script>

<slot matches={$matches}/>