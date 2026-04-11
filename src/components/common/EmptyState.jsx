import { COLORS } from "../../constants/colors";
import { Icon } from "./Icon";

// EmptyState shows a placeholder for empty views.
// Pass an `action` object ({ label, onClick }) to render a CTA button.
export function EmptyState({ icon, title, subtitle, action }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "24px",
          background: COLORS.surfaceContainerLow,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Icon name={icon} size="36px" style={{ color: COLORS.outlineVariant }} />
      </div>
      {title && (
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: COLORS.onSurface,
            marginBottom: "8px",
            fontFamily: "Manrope, sans-serif",
          }}
        >
          {title}
        </h3>
      )}
      {subtitle && (
        <p style={{ fontSize: "14px", color: COLORS.onSurfaceVariant, maxWidth: "320px" }}>
          {subtitle}
        </p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          style={{
            marginTop: "20px",
            padding: "10px 24px",
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryContainer})`,
            color: COLORS.onPrimary,
            border: "none",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "14px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,83,204,0.2)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
