import { writable } from 'svelte/store'
import { onDestroy } from 'svelte'
import { browser } from '$app/env'

type Options = {
  window?: Window
}
const defaultWindow = browser ? window : undefined

const useActiveElement = <T extends HTMLElement>({ window = defaultWindow }: Options = {}) => {
  const activeElement = writable(window?.document.activeElement as T)
  const updateState = () => activeElement.set(window?.document.activeElement as T)
  if (window) window.addEventListener('focus', updateState, true)
  onDestroy(() => window?.removeEventListener('focus', updateState))
  return activeElement
}

export default useActiveElement