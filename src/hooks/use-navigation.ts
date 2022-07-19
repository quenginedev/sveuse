import { writable, derived, get } from 'svelte/store'

import type { Writable } from 'svelte/store'

type Navigation = {
  name: string,
  route: string,
  type: 'action' | 'hook'
}

const paths: Writable<Navigation[]> = writable([
  { name: 'useClickOutside', route: '/use-click-outside', type: 'action' },
  { name: 'useActiveElement', route: '/use-active-element', type: 'hook' },
  { name: 'useEventListener', route: '/use-event-listener', type: 'hook' },
])

const searchQuery = writable('')

const searchedPaths = derived(searchQuery, query => {
  const pathsValues = get(paths)
  return pathsValues.filter(path => path.name.includes(query) || path.route.includes(query) || path.type.includes(query))
})

const clearSearchQuery = () => {
  searchQuery.set('')
}

const useNavigation = () => {
  return {
    paths,
    searchQuery,
    searchedPaths,
    clearSearchQuery
  }
}

export default useNavigation