import useEventListener from "./useEventListener";
import type {Unsubscribe} from "../shared";
import {onDestroy, onMount} from "svelte";

type UseActiveElement = (options: {
    element: Element,
    handler: (activeElement: HTMLElement) => void
}) => void;

export const useActiveElement: UseActiveElement = ({element, handler}) => {
    let unsubscribe: Unsubscribe

    const handleActiveElement = (event: Event) => {
        if (element.contains(event.target as Node)) return;
        handler(event.target as HTMLElement);
    }

    onMount(() => {
        unsubscribe = useEventListener({
            event: 'focus',
            handler: handleActiveElement,
            element
        })
    })

    onDestroy(() => {
        unsubscribe()
    })
}

export default useActiveElement;