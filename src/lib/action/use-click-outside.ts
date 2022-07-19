import type { Action } from 'svelte/action'
import { useEventListener } from '../hooks'


const createHandleClick = (element: HTMLElement) => (event: Event) => {
  if (element && !element.contains(event.target as Node) && !event.defaultPrevented) {
    element.dispatchEvent(new CustomEvent('trigger', event))
  }
}


const useClickOutside: Action = (element: HTMLElement) => {
  const handleClick = createHandleClick(element)
  const destroy = useEventListener(document, 'click', handleClick)
  return { destroy }
}

export default useClickOutside