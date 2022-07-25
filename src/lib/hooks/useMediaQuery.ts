import {writable} from "svelte/store";
import useEventListener from "./useEventListener";

export const useMediaQuery = (query: string) => {
    const mediaQuery = window.matchMedia(query);
    const matches = writable(mediaQuery.matches);
    mediaQuery.addEventListener("change", () => matches.set(mediaQuery.matches))
    useEventListener({
        event: "change",
        handler: () => matches.set(mediaQuery.matches),
        element: mediaQuery
    })
    return matches;
}

export default useMediaQuery;