import {writable} from "svelte/store";
import useEventListener from "./useEventListener";
import {onMount} from "svelte";

export const useBrowserLocation = () => {
    const location = writable({});

    let unsubscribePopState: () => void;
    let unsubscribeHashChange: () => void;

    const getState = () => {
        const {state, length} = window?.history || {}
        const {hash, host, hostname, href, origin, pathname, port, protocol, search} = window?.location || {}
        return {state, length, hash, host, hostname, href, origin, pathname, port, protocol, search}
    }

    const handleLocationChange = () => {
        location.set(getState())
    }

    onMount(()=>{
        location.set(getState())

        useEventListener({
            event: 'popstate',
            handler: handleLocationChange,
            element: window
        })

        useEventListener({
            event: 'hashchange',
            handler: handleLocationChange,
            element: window
        })
    })


    return location;
}

export default useBrowserLocation;