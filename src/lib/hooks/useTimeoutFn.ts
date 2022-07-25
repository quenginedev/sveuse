type UseTimeoutFn = (options: {
    fn: () => void,
    delay: number,
}) => {
    start: () => void,
};
export const useTimeoutFn: UseTimeoutFn = ({fn, delay}) => ({
    start: () => {
        const timeout = setTimeout(() => {
            fn()
            clearTimeout(timeout)
        }, delay);
    }
})

export default useTimeoutFn;