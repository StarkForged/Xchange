import { COLORS } from "../../constants/colors";
import { Icon } from "./Icon";

export function TrustBadge({ score }) {
  const color =
    score >= 90
      ? COLORS.tertiary
      : score >= 70
      ? COLORS.primary
      : COLORS.secondary;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: color,
          boxShadow: `0 0 8px ${color}`,
        }}
      />
      <span
        style={{
          fontSize: "12px",
          fontWeight: 700,
          color: color,
        }}
      >
        Trust: {score}
      </span>
    </div>
  );
}
