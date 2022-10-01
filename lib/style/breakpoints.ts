import type { CSSInterpolation } from "@emotion/css";

export const breakpoints = {
  phone: {
    lower: 0,
    upper: 599,
  },
  tabletPortrait: {
    lower: 600,
    upper: 899,
  },
  tabletLandscape: {
    lower: 900,
    upper: 1199,
  },
  desktop: {
    lower: 1200,
    upper: 1799,
  },
  largeDesktop: {
    lower: 1800,
    upper: Infinity,
  },
};

export const phoneDown = (styles: CSSInterpolation) => {
  return {
    [`@media (max-width: ${breakpoints.phone.upper}px)`]: styles,
  };
};

export const tabletPortraitUp = (styles: CSSInterpolation) => {
  return {
    [`@media (min-width: ${breakpoints.tabletPortrait.lower}px)`]: styles,
  };
};

export const tabletPortraitDown = (styles: CSSInterpolation) => {
  return {
    [`@media (max-width: ${breakpoints.tabletPortrait.upper}px)`]: styles,
  };
};

export const tabletLandscapeUp = (styles: CSSInterpolation) => {
  return {
    [`@media (min-width: ${breakpoints.tabletLandscape.lower}px)`]: styles,
  };
};

export const tabletLandscapeDown = (styles: CSSInterpolation) => {
  return {
    [`@media (max-width: ${breakpoints.tabletLandscape.upper}px)`]: styles,
  };
};

export const desktopUp = (styles: CSSInterpolation) => {
  return {
    [`@media (min-width: ${breakpoints.desktop.lower}px)`]: styles,
  };
};

export const desktopDown = (styles: CSSInterpolation) => {
  return {
    [`@media (max-width: ${breakpoints.desktop.upper}px)`]: styles,
  };
};

export const largeDesktopUp = (styles: CSSInterpolation) => {
  return {
    [`@media (min-width: ${breakpoints.largeDesktop.lower}px)`]: styles,
  };
};
