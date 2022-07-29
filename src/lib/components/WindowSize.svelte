<script>
    import {useWindowSize} from '$lib'
    const {width, height} = useWindowSize()
</script>

<slot width={$width} height={$height}></slot>
