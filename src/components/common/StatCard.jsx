import { COLORS } from "../../constants/colors";
import { Icon } from "./Icon";

// StatCard renders a small dashboard metric card with an icon.
export function StatCard({ icon, iconBg, iconColor, label, value, extra }) {
  return (
    <div
      style={{
        padding: "20px",
        background: COLORS.surfaceContainerLowest,
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        border: `1px solid rgba(171,173,174,0.1)`,
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "16px",
          background: iconBg || "rgba(0,83,204,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: iconColor || COLORS.primary,
        }}
      >
        <Icon name={icon} size="28px" />
      </div>
      <div>
        <p
          style={{
            fontSize: "13px",
            color: COLORS.secondary,
            marginBottom: "2px",
          }}
        >
          {label}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h4
            style={{
              fontSize: "22px",
              fontWeight: 900,
              fontFamily: "Manrope, sans-serif",
              color: COLORS.onSurface,
            }}
          >
            {value}
          </h4>
          {extra}
        </div>
      </div>
    </div>
  );
}
