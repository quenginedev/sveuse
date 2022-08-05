<script lang="ts">
    import {useBreakpoint} from "../hooks";
    import type {Breakpoints} from "../hooks/useBreakpoint";
    import {derived, get} from "svelte/store";

    export let breakpoints: Breakpoints
    export let gt: Array<string> = []
    export let lt: Array<string> = []
    export let btw: Array<[string, string]> = []
    const {greater, smaller, between} = useBreakpoint(breakpoints)
    const pointsMap = {
        gt: [],
        lt: [],
        btw: []
    }

    for (let name of gt) {
        pointsMap.gt.push({
            name,
            store: greater(name)
        })
    }

    for (let name of lt) {
        pointsMap.lt.push({
            name,
            store: smaller(name)
        })
    }

    for (let [name1, name2] of btw) {
        pointsMap.btw.push({
            name: [name1, name2],
            store: between(name1, name2)
        })
    }

    const gtStore = derived(
        pointsMap.gt.map(({store}) => store),
        (storeValue) => storeValue.reduce((gtStore, value, index) => {
            gtStore[gt[index]] = value
            return gtStore
        }, {})
    )
    console.log({gtStore})
</script>

<slot gt={$gtStore}/>