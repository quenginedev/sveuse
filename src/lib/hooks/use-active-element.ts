import { writable } from 'svelte/store'
import { onDestroy } from 'svelte'
import { useEventListener } from '../hooks'
import { isClient } from "../shared";

const defaultWindow = isClient ? window : undefined

type Options = { window?: Window }
const useActiveElement = <T extends HTMLElement>({ window }: Options = { window: defaultWindow }) => {
  const activeElement = writable(window?.document.activeElement as T)
  const updateState = () => activeElement.set(window?.document.activeElement as T)
  if (window) {
    const removeEvent = useEventListener(window, 'focusin', updateState)
    onDestroy(removeEvent)
  }
  return activeElement
}

export default useActiveElement