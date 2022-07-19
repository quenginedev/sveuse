import type { Subscriber } from 'svelte/store'
import { useEventListener } from '../hooks'

type MousePositionCallback = (position: {
  x: number,
  y: number
}) => void

type UseMouseMove = (el?: Element) => {
  subscribe: Subscriber<MousePositionCallback>
}

const onMouseMove: UseMouseMove = (el) => ({
  subscribe: fn => {
    if (!el) el = document.body
    fn({ x: 0, y: 0 })
    const move = (event: MouseEvent) => {
      fn({
        x: event.clientX,
        y: event.clientY
      })
    }
    const destroy = useEventListener(document, 'mousemove', move as EventListenerOrEventListenerObject)
    return { destroy }
  }
})

export default onMouseMove