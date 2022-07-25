import useEventListener from './useEventListener'
import {onDestroy, onMount} from "svelte";
import type {Unsubscribe} from "../shared";

type UseClickOutside = (options: { element: HTMLElement, handler: () => void }) => void;

export const useClickOutside: UseClickOutside = ({element, handler} ) => {
    let unsubscribe: Unsubscribe;
    const handleClick = (event: Event) => {
        if (element.contains(event.target as Node)) return;
        handler();
    }
    onMount(()=>{
        unsubscribe = useEventListener({
            event: 'click',
            handler: handleClick,
            element
        });
    })

    onDestroy(() => {
        unsubscribe()
    })

}

export default useClickOutside;