import { COLORS } from "../../constants/colors";
import { Icon } from "./Icon";

// EmptyState shows a simple placeholder message for empty views.
export function EmptyState({ icon, title, subtitle }) {
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
      <p style={{ fontSize: "14px", color: COLORS.onSurfaceVariant }}>
        {subtitle}
      </p>
    </div>
  );
}
