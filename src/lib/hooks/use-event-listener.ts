import { isClient } from "../shared";

const useEventListener = (
  element: HTMLElement | Window | Document,
  event: keyof HTMLElementEventMap,
  callback:  EventListenerOrEventListenerObject
) => {
  if (!isClient || !element) return () => false
  element.addEventListener(event, callback)
  return () => element.removeEventListener(event, callback)
}

export default useEventListener