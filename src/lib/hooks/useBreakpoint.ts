import useMediaQuery from "./useMediaQuery";

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Breakpoints = {
    [key in Breakpoint]: number;
}

export const useBreakpoint = (breakpoints: Breakpoints) => {
    const greater = (breakpoint: Breakpoint) => useMediaQuery(`(min-width: ${breakpoint}px)`);
    const smaller = (breakpoint: Breakpoint) => useMediaQuery(`(max-width: ${breakpoints[breakpoint] - 1}px)`);
    const between = (breakpoint: Breakpoint, breakpoint2: Breakpoint) => useMediaQuery(
        `(min-width: ${breakpoints[breakpoint]}px) and (max-width: ${breakpoints[breakpoint2] - 1}px)`
    );

    return {
        greater,
        smaller,
        between
    }
}

export default useBreakpoint;