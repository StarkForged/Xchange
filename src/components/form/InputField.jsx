import { useState } from "react";
import { COLORS } from "../../constants/colors";
import { Icon } from "../common/Icon";

// InputField — reusable input with optional icon, error, and textarea support.
export function InputField({
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  icon,
  error,
  style: customStyle = {},
}) {
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? COLORS.error
    : focused
    ? "rgba(0,83,204,0.4)"
    : "transparent";

  const sharedInputStyle = {
    width: "100%",
    padding: "12px 16px",
    paddingLeft: icon ? "44px" : "16px",
    background: error ? "rgba(179,27,37,0.03)" : COLORS.surfaceContainerLowest,
    border: `2px solid ${borderColor}`,
    borderRadius: "12px",
    fontSize: "14px",
    outline: "none",
    transition: "border 0.2s",
    fontFamily: "Inter, sans-serif",
    color: COLORS.onSurface,
    boxSizing: "border-box",
  };

  const handleBlur = (e) => {
    setFocused(false);
    onBlur?.(e);
  };

  return (
    <div style={{ marginBottom: "16px", ...customStyle }}>
      {label && (
        <label
          style={{
            display: "block",
            fontSize: "12px",
            fontWeight: 600,
            color: error ? COLORS.error : COLORS.onSurfaceVariant,
            marginBottom: "6px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        {icon && (
          <Icon
            name={icon}
            size="20px"
            style={{
              position: "absolute",
              left: "14px",
              top: type === "textarea" ? "14px" : "50%",
              transform: type === "textarea" ? "none" : "translateY(-50%)",
              color: error ? COLORS.error : COLORS.outlineVariant,
              pointerEvents: "none",
            }}
          />
        )}
        {type === "textarea" ? (
          <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
            rows={4}
            style={{ ...sharedInputStyle, resize: "vertical" }}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
            style={sharedInputStyle}
          />
        )}
      </div>
      {error && (
        <p
          style={{
            marginTop: "4px",
            fontSize: "12px",
            color: COLORS.error,
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Icon name="error" size="12px" />
          {error}
        </p>
      )}
    </div>
  );
}
