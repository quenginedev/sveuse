import type { Subscriber } from 'svelte/store'
type MousePositionCallback = (position: {
  x: number,
  y: number
}) => void

type OnMouseMove = (el?: Element) => {
  subscribe: Subscriber<MousePositionCallback>
}

const onMouseMove: OnMouseMove = (el) => ({
  subscribe: fn => {
    if (!el) el = document.body
    fn({ x: 0, y: 0 })
    const move = (event: MouseEvent) => {
      fn({
        x: event.clientX,
        y: event.clientY
      })
    }
    document.addEventListener('mousemove', move)
    return () => {
      document.removeEventListener('mousemove', move)
    }
  }
})

export default onMouseMove