type UseEventListener = <T extends keyof DocumentEventMap | keyof WindowEventHandlersEventMap, U extends EventTarget>(options: {
    event: T,
    handler: EventListener | EventListenerObject,
    element: U
}) => () => void;

export const useEventListener: UseEventListener = ({handler, element, event}) => {
    element.addEventListener(event, handler);
    return () => element.addEventListener(event, handler);
}

export default useEventListener;