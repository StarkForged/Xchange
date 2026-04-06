import { COLORS } from "../../constants/colors";

export function PrimaryButton({ children, onClick, style: s = {}, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: disabled
          ? COLORS.surfaceContainerHigh
          : `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryContainer})`,
        color: disabled ? COLORS.onSurfaceVariant : COLORS.onPrimary,
        padding: "12px 28px",
        borderRadius: "14px",
        border: "none",
        fontWeight: 700,
        fontSize: "14px",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s",
        boxShadow: disabled ? "none" : "0 4px 16px rgba(0,83,204,0.2)",
        fontFamily: "Inter, sans-serif",
        ...s,
      }}
    >
      {children}
    </button>
  );
}
