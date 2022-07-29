import useMediaQuery from "./useMediaQuery";

export type Breakpoints = {
    [key: string]: number;
}

export const useBreakpoint = (breakpoints: Breakpoints) => {
    const greater = (breakpoint: string) => useMediaQuery(`(min-width: ${breakpoints[breakpoint]}px)`);
    const smaller = (breakpoint: string) => useMediaQuery(`(max-width: ${breakpoints[breakpoint] - 1}px)`);
    const between = (breakpoint: string, breakpoint2: string) => useMediaQuery(
        `(min-width: ${breakpoints[breakpoint]}px) and (max-width: ${breakpoints[breakpoint2] - 1}px)`
    );

    return {
        greater,
        smaller,
        between
    }
}

export default useBreakpoint;