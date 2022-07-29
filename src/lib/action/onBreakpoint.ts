import type {Action} from "svelte/action";
import type {Breakpoints} from "../hooks/useBreakpoint";
import {useBreakpoint} from "../hooks/useBreakpoint";
import {get} from "svelte/store";
import {onDestroy} from "svelte";
import type {Unsubscribe} from "../shared";
import type {Writable} from "svelte/store";

type Options = {
    breakpoints: Breakpoints;
    gt?: Array<keyof Breakpoints>
    lt?: Array<keyof Breakpoints>
    btw?: Array<[keyof Breakpoints, keyof Breakpoints]>
}

const createHandleDispatchNodeEvent = (options: { node: Node, eventName: string, store: Writable<boolean> }) => () => {
    const {node, eventName, store} = options;
    node.dispatchEvent(new CustomEvent(eventName, {detail: get(store)}));
}

export const onBreakpoint: Action = (node, options: Options = {btw: [], gt: [], lt: [], breakpoints: {}}) => {
    const {breakpoints, gt, lt, btw} = options;
    const subscribers: Array<Unsubscribe> = [];
    const {greater, smaller, between} = useBreakpoint(breakpoints);

    for (const breakpoint in gt) {
        const store = greater(breakpoint);
        subscribers.push(
            store.subscribe(createHandleDispatchNodeEvent({
                node,
                eventName: `gt-${breakpoint}`,
                store
            }))
        );
    }

    for (const breakpoint in lt) {
        const store = smaller(breakpoint);
        subscribers.push(
            store.subscribe(createHandleDispatchNodeEvent({
                node,
                eventName: `lt-${breakpoint}`,
                store
            }))
        );
    }

    for (const breakpoint in btw) {
        const store = between(breakpoint[0], breakpoint[1]);
        subscribers.push(
            store.subscribe(createHandleDispatchNodeEvent({
                node,
                eventName: `btw-${breakpoint[0]}-${breakpoint[1]}`,
                store
            }))
        );
    }

    onDestroy(() => {
        subscribers.forEach(unsubscribe => unsubscribe());
    })
}

