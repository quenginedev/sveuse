<script>
    import {useWindowSize} from '$lib'
    const {width, height} = useWindowSize()
</script>

<div class="">
    <slot width={$width} height={$height}></slot>
</div>