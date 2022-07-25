const hooks = [
    {name: 'UseActiveElement', path: '/useActiveElement'},
    {name: 'UseBreakpoint', path: '/useBreakpoint'},
    {name: 'UseClickOutside', path: '/useClickOutside'},
    {name: 'UseEventListener', path: '/useEventListener'},
    {name: 'UseMediaQuery', path: '/useMediaQuery'},
    {name: 'UseClipboard', path: '/useClipboard'},
    {name: 'UseTimeoutFn', path: '/useTimeoutFn'},
    {name: 'UseWindowScroll', path: '/useWindowScroll'},
    {name: 'UseWindowResize', path: '/useWindowResize'},
    {name: 'UseWindowSize', path: '/useWindowSize'},
]

export const useNavigation = () => {
    return {
        hooks: hooks.sort((a, b) => a.name.localeCompare(b.name))
    }
}