<script>
    import {useActiveElement} from '../hooks'

    const activeElement = useActiveElement()
</script>

<slot active={$activeElement}/>