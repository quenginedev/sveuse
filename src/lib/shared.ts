import { browser } from '$app/env'

export const defaultWindow =  browser ? window : null
export type Unsubscribe = () => void