import type {Action} from "svelte/action";
import {onDestroy} from "svelte";
import {useActiveElement} from "../hooks"

export const onActiveElement: Action = (node, {onActive}) => {
    const activeElement = useActiveElement()
    const unsubscribe = activeElement.subscribe(element => {
        if (onActive) onActive(element)
        node.dispatchEvent(new CustomEvent('active', {detail: element}))
    });
    onDestroy(unsubscribe);
}