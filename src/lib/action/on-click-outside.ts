import type { Action } from 'svelte/action'

const onClickOutside: Action = (element: HTMLElement) => {
  const handleClick = (event: MouseEvent) => {
    if (element && !element.contains(event.target as Node) && !event.defaultPrevented) {
      element.dispatchEvent(new CustomEvent('trigger', event))
    }
  }
  document.addEventListener('click', handleClick, true)
  return {
    destroy: () => {
      document.removeEventListener('click', handleClick, true)
    }
  }
}

export default onClickOutside