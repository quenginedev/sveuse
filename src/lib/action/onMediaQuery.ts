import type {Action} from "svelte/action";
import {useMediaQuery} from "../hooks";
import {onDestroy} from "svelte";

export const onMediaQuery: Action = (node, {query} = {}) => {
    const matches = useMediaQuery(query);
    const unsubscribe = matches.subscribe(matches => {
        node.dispatchEvent(new CustomEvent('matches', {detail: matches}));
    })
    onDestroy(unsubscribe);
}