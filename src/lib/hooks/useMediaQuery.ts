import {writable} from "svelte/store";
import useEventListener from "./useEventListener";
import {onDestroy, onMount} from "svelte";
import type {Unsubscribe} from "../shared";

export const useMediaQuery = (query: string) => {
    const matches = writable(false);
    let unsubscribe: Unsubscribe;
    onMount(() => {
        const mediaQuery = window.matchMedia(query);
        matches.set(mediaQuery.matches)
        mediaQuery.addEventListener("change", () => matches.set(mediaQuery.matches))
        unsubscribe = useEventListener({
            event: "change",
            handler: () => matches.set(mediaQuery.matches),
            element: mediaQuery
        })
    })
    onDestroy(() => {
        unsubscribe && unsubscribe()
    })
    return matches;
}

export default useMediaQuery;