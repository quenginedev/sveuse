import {page} from '$app/stores';
import {goto} from '$app/navigation';
import {derived, get} from "svelte/store";

const hooks = [
    {name: 'ActiveElement', path: '/ActiveElement'},
    {name: 'Breakpoint', path: '/Breakpoint'},
    {name: 'ClickOutside', path: '/ClickOutside'},
    {name: 'EventListener', path: '/EventListener'},
    {name: 'MediaQuery', path: '/MediaQuery'},
    {name: 'Clipboard', path: '/Clipboard'},
    {name: 'TimeoutFn', path: '/TimeoutFn'},
    {name: 'WindowScroll', path: '/WindowScroll'},
    {name: 'WindowResize', path: '/WindowResize'},
    {name: 'WindowSize', path: '/WindowSize'},
]

const currentPath = derived(page, $page => $page.url.pathname)
const navigateTo = (path: string) => () => goto(path)


export const useNavigation = () => {
    return {
        currentPath,
        hooks: hooks.sort((a, b) => a.name.localeCompare(b.name)),
        navigateTo
    }
}