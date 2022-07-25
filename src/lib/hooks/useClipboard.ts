import useEventListener from "./useEventListener";
import {writable} from "svelte/store";
import useTimeoutFn from "./useTimeoutFn";
import {onDestroy, onMount} from "svelte";
import type {Unsubscribe} from "../shared";

type UseClipboard = (options?: {
    read: boolean,
    copiedDuration: number,
}) => void;

export const useClipboard: UseClipboard = ({read, copiedDuration} = {read: false, copiedDuration: 1500}) => {
    const events: (keyof DocumentEventMap | keyof WindowEventHandlersEventMap)[] = ["copy", "cut"];
    const text = writable('')
    const copied = writable(false)
    const isSupported = 'clipboard' in navigator
    const unsubscribers: Unsubscribe[] = []

    const updateText = () => {
        navigator.clipboard.readText().then(value => {
            text.set(value)
        })
    }
    const timeout = useTimeoutFn({
        fn: () => {
            copied.set(false)
        },
        delay: copiedDuration
    })

    const copy = async (value: string) => {
        await navigator.clipboard.writeText(value)
        text.set(value)
        copied.set(true)
        timeout.start()
    }

    onMount(() => {
        if (isSupported && read) {
            for (const event of events) {
                unsubscribers.push(useEventListener({
                    event,
                    handler: updateText,
                    element: document
                }))
            }
        }
    })

    onDestroy(()=>{
        for (const unsubscribe of unsubscribers) {
            unsubscribe()
        }
    })

    return {
        isSupported,
        text,
        copied,
        copy
    }
}

export default useClipboard;