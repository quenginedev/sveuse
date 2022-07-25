import type {Action} from "svelte/action";
import {useWindowSize} from "../hooks";
import {derived, get} from "svelte/store";
import {onDestroy} from "svelte";

export const onWindowSize: Action = (node, {onResize}) => {
    const {width, height} = useWindowSize();
    const size = derived([width, height], ([w, h]) => ({w, h}));
    if (onResize) {
        const unsubscribe = size.subscribe(onResize);
        onDestroy(unsubscribe);
    }
    node.dispatchEvent(new CustomEvent('window-size', {detail: get(size)}));
}