<script lang="ts">
    import {useBreakpoint} from "../hooks";
    import type {Breakpoints} from "../hooks/useBreakpoint";
    import type {Unsubscribe} from "../shared";
    import {createEventDispatcher, onDestroy} from 'svelte'

    const dispatch = createEventDispatcher()

    export let breakpoints: Breakpoints
    export let gt: Array<string> = []
    export let lt: Array<string> = []
    export let btw: Array<[string, string]> = []
    const subscribers: Array<Unsubscribe> = []
    const {between, greater, smaller} = useBreakpoint(breakpoints);
    for (let point of gt) {
        const store = greater(point)
        subscribers.push(store.subscribe(value => {
            dispatch(`gt-${point}`, value)
        }))
    }
    for (let point of lt) {
        const store = smaller(point)
        subscribers.push(store.subscribe(value => {
            dispatch(`lt-${point}`, value)
        }))
    }

    for (let [point1, point2] of btw) {
        const store = between(point1, point2)
        subscribers.push(store.subscribe(value => {
            dispatch(`btw-${point1}-${point2}`, value)
        }))
    }

    onDestroy(() => {
        subscribers.forEach(unsubscribe => unsubscribe())
    })
</script>

<slot/>