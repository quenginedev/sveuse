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
  query = query.toLowerCase()
  const pathsValues = get(paths)
  return pathsValues.reduce<Navigation[]>((acc, path) => {
    if (path.name.toLowerCase().includes(query)) {acc.push(path)}
    return acc
  }, [])
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