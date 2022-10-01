import type { CSSInterpolation } from "@emotion/css";

export const breakpoints = {
  xs: {
    lower: 0,
    upper: 599,
  },
  sm: {
    lower: 600,
    upper: 899,
  },
  md: {
    lower: 900,
    upper: 1199,
  },
  lg: {
    lower: 1200,
    upper: 1799,
  },
  xl: {
    lower: 1800,
    upper: Infinity,
  },
};

export const xsDown = (styles: CSSInterpolation) => {
  return {
    [`@media (max-width: ${breakpoints.xs.upper}px)`]: styles,
  };
};

export const smUp = (styles: CSSInterpolation) => {
  return {
    [`@media (min-width: ${breakpoints.sm.lower}px)`]: styles,
  };
};

export const smDown = (styles: CSSInterpolation) => {
  return {
    [`@media (max-width: ${breakpoints.sm.upper}px)`]: styles,
  };
};

export const mdUp = (styles: CSSInterpolation) => {
  return {
    [`@media (min-width: ${breakpoints.md.lower}px)`]: styles,
  };
};

export const mdDown = (styles: CSSInterpolation) => {
  return {
    [`@media (max-width: ${breakpoints.md.upper}px)`]: styles,
  };
};

export const lgUp = (styles: CSSInterpolation) => {
  return {
    [`@media (min-width: ${breakpoints.lg.lower}px)`]: styles,
  };
};

export const lgDown = (styles: CSSInterpolation) => {
  return {
    [`@media (max-width: ${breakpoints.lg.upper}px)`]: styles,
  };
};

export const xlUp = (styles: CSSInterpolation) => {
  return {
    [`@media (min-width: ${breakpoints.xl.lower}px)`]: styles,
  };
};
