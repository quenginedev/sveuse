<script>
    import {useMediaQuery} from "$lib";
    import Example from "../../utils/components/Example.svelte";
    import Hook from './_hook.svelte'
    import Component from './_component.svelte'
    import Action from './_action.svelte'

    const query = useMediaQuery("(min-width: 768px)");
</script>

<Example title="MediaQuery">
    <h1>Is width greater than 768px: <span class="text-primary capitalize">{$query ? 'yes' : 'no'}</span></h1>
    <Hook slot="hook"/>
    <Component slot="component"/>
    <Action slot="action"/>
</Example>