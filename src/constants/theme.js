// Design system tokens: spacing, typography, shadows, radius, and breakpoints.
// Import alongside COLORS for a consistent visual language.

export const SPACING = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
  xxxl: "64px",
};

export const RADIUS = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  xxl: "28px",
  full: "999px",
};

export const TYPOGRAPHY = {
  heading: "Manrope, sans-serif",
  body: "Inter, sans-serif",
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
};

export const SHADOWS = {
  sm: "0 2px 8px rgba(44,47,48,0.04)",
  md: "0 4px 16px rgba(44,47,48,0.06)",
  lg: "0 8px 24px rgba(44,47,48,0.08)",
  xl: "0 12px 32px rgba(44,47,48,0.10)",
  primary: "0 4px 16px rgba(0,83,204,0.20)",
};

export const BREAKPOINTS = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1440px",
};
