import useEventListener from "./useEventListener";
import type {Unsubscribe} from "../shared";
import {onDestroy, onMount} from "svelte";
import {writable} from "svelte/store";
import type {Writable} from "svelte/store";

type UseActiveElement = (element?: Element) => Writable<HTMLElement | null>;

export const useActiveElement: UseActiveElement = (element) => {
    const activeElement = writable<HTMLElement | null>(null);
    let unsubscribe: Unsubscribe

    const handleActiveElement = () => {
        if(element && !element.contains(document.activeElement)) return
        activeElement.set(document.activeElement as HTMLElement);
    }

    onMount(() => {
        handleActiveElement();
        unsubscribe = useEventListener({
            event: 'focusin',
            handler: handleActiveElement,
            element: document.body
        })
    })

    onDestroy(() => {
        unsubscribe && unsubscribe()
    })

    return activeElement
}

export default useActiveElement;