import type {Action} from "svelte/action";
import {useWindowSize} from "../hooks";
import {derived} from "svelte/store";
import {onDestroy} from "svelte";

export const onWindowSize: Action = (node, {onResize} = {}) => {
    const {width, height} = useWindowSize();
    const size = derived([width, height], ([w, h]) => ({w, h}));
    const unsubscribe = size.subscribe((state)=> {
        if (onResize) onResize(state)
        node.dispatchEvent(new CustomEvent('resize', {detail: state}))
    })
    onDestroy(unsubscribe);
}