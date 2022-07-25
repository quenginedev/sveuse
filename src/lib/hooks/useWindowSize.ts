import {writable} from "svelte/store";
import useEventListener from "./useEventListener";

import type {Writable} from "svelte/store";
import {onDestroy, onMount} from "svelte";

type UseWindowSize = () => {
    width: Writable<number>,
    height: Writable<number>
};


export const useWindowSize: UseWindowSize = () => {

    const width = writable(0)
    const height = writable(0)
    let unsubscribe: () => void

    const handleResize = () => {
        width.set(window?.innerWidth)
        height.set(window?.innerHeight)
    }


    onMount(() => {
        handleResize()
        unsubscribe = useEventListener({
            event: 'resize',
            handler: handleResize,
            element: window
        });
    })
    onDestroy(()=>{
        unsubscribe && unsubscribe()
    })

    return {
        width,
        height
    }
}

export default useWindowSize;