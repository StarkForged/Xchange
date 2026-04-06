import { COLORS } from "../../constants/colors";

export function SelectField({ label, value, onChange, options }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      {label && (
        <label
          style={{
            display: "block",
            fontSize: "12px",
            fontWeight: 600,
            color: COLORS.onSurfaceVariant,
            marginBottom: "6px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "12px 16px",
          background: COLORS.surfaceContainerLowest,
          border: "2px solid transparent",
          borderRadius: "12px",
          fontSize: "14px",
          outline: "none",
          fontFamily: "Inter, sans-serif",
          color: COLORS.onSurface,
          cursor: "pointer",
          boxSizing: "border-box",
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
