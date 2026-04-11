import { COLORS } from "../../constants/colors";

// variant styles map — disabled state is handled separately
const VARIANT_STYLES = {
  primary: {
    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryContainer})`,
    color: COLORS.onPrimary,
    border: "none",
    boxShadow: "0 4px 16px rgba(0,83,204,0.20)",
  },
  secondary: {
    background: COLORS.surfaceContainerLow,
    color: COLORS.onSurface,
    border: "none",
    boxShadow: "none",
  },
  outline: {
    background: "transparent",
    color: COLORS.primary,
    border: `1.5px solid ${COLORS.primary}`,
    boxShadow: "none",
  },
  ghost: {
    background: "transparent",
    color: COLORS.primary,
    border: "none",
    boxShadow: "none",
  },
  danger: {
    background: "rgba(179,27,37,0.06)",
    color: COLORS.error,
    border: "1px solid rgba(179,27,37,0.15)",
    boxShadow: "none",
  },
};

const SIZE_STYLES = {
  sm: { padding: "8px 16px", fontSize: "13px", borderRadius: "10px" },
  md: { padding: "12px 24px", fontSize: "14px", borderRadius: "14px" },
  lg: { padding: "14px 32px", fontSize: "15px", borderRadius: "16px" },
};

const DISABLED_STYLES = {
  background: COLORS.surfaceContainerHigh,
  color: COLORS.outlineVariant,
  border: "none",
  boxShadow: "none",
};

/**
 * Button — design-system button with variant, size, and fullWidth support.
 *
 * Variants: primary | secondary | outline | ghost | danger
 * Sizes: sm | md | lg
 */
export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  type = "button",
  style: customStyle = {},
  ...rest
}) {
  const variantStyles = disabled
    ? DISABLED_STYLES
    : (VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        fontWeight: 700,
        fontFamily: "Inter, sans-serif",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s",
        width: fullWidth ? "100%" : "auto",
        ...variantStyles,
        ...(SIZE_STYLES[size] ?? SIZE_STYLES.md),
        ...customStyle,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
