import type {Writable} from "svelte/store";
import {writable} from "svelte/store";
import useEventListener from "./useEventListener";

type UseWindowResize = (options: {
    element: HTMLElement,
}) => {
    width: Writable<number>,
    height: Writable<number>
}

export const useWindowResize: UseWindowResize = ({element}) => {
    const width = writable(element.clientWidth);
    const height = writable(element.clientWidth);

    const handleResize = () => {
        width.set(element.clientWidth);
        height.set(element.clientHeight);
    }
    useEventListener({
        event: 'resize',
        handler: handleResize,
        element
    });

    return {
        width,
        height
    }
}

export default useWindowResize;