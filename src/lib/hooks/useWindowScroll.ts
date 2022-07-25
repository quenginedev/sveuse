
import type {Writable} from "svelte/store";
import useEventListener from "./useEventListener";
import {writable} from "svelte/store";

type UseWindowScroll = () => {
    scrollX: Writable<number>,
    scrollY: Writable<number>
}

export const useWindowScroll: UseWindowScroll = () => {
    const scrollX = writable(window.scrollX);
    const scrollY = writable(window.scrollY);

    const handleScroll = () => {
        scrollX.set(window.scrollX);
        scrollY.set(window.scrollY);
    }
    useEventListener({
        event: 'scroll',
        handler: handleScroll,
        element: window
    });

    return {
        scrollX,
        scrollY
    }
}

export default useWindowScroll;
