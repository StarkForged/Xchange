import { COLORS } from "../../constants/colors";
import { Icon } from "../common/Icon";

export function SideNav({ items, active, onSelect }) {
  return (
    <aside
      style={{
        width: "240px",
        background: "#fafbfc",
        padding: "32px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        minHeight: "calc(100vh - 72px)",
        position: "sticky",
        top: "72px",
      }}
    >
      <div style={{ marginBottom: "28px", padding: "0 16px" }}>
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}
        >
          <Icon name="verified_user" filled style={{ color: COLORS.primary }} />
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "Manrope, sans-serif",
              color: COLORS.onSurface,
            }}
          >
            Control Panel
          </span>
        </div>
        <p style={{ fontSize: "11px", color: COLORS.secondary }}>
          System Status: Active
        </p>
      </div>
      {items.map((item) => (
        <a
          key={item.id}
          onClick={() => onSelect(item.id)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 16px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: active === item.id ? 700 : 400,
            fontSize: "14px",
            color:
              active === item.id ? COLORS.primary : COLORS.onSurfaceVariant,
            background:
              active === item.id ? COLORS.surfaceContainerLowest : "transparent",
            boxShadow:
              active === item.id
                ? "0 2px 8px rgba(0,0,0,0.04)"
                : "none",
            transition: "all 0.2s",
          }}
        >
          <Icon name={item.icon} filled={active === item.id} size="20px" />
          {item.label}
        </a>
      ))}
      <div style={{ marginTop: "auto", padding: "0 16px" }}>
        <button
          style={{
            width: "100%",
            padding: "12px",
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryContainer})`,
            color: COLORS.onPrimary,
            border: "none",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "13px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,83,204,0.2)",
          }}
        >
          New Listing
        </button>
      </div>
    </aside>
  );
}
