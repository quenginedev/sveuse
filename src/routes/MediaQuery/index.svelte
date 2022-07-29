<script>
    import {useMediaQuery} from "$lib";
    import Example from "../../utils/components/Example.svelte";
    const query = useMediaQuery("(min-width: 768px)");
</script>

<Example title="MediaQuery">
    <h1>Is width greater than 768px: <span class="text-primary capitalize">{$query ? 'yes' : 'no'}</span></h1>
</Example>