import { useState } from "react";
import { COLORS } from "../../constants/colors";
import { Icon } from "../common/Icon";

// InputField is a reusable text input component with optional icon support.
export function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  style: customStyle = {},
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: "16px", ...customStyle }}>
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
      <div style={{ position: "relative" }}>
        {icon && (
          <Icon
            name={icon}
            size="20px"
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              color: COLORS.outlineVariant,
            }}
          />
        )}
        {type === "textarea" ? (
          <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            rows={4}
            style={{
              width: "100%",
              padding: "12px 16px",
              paddingLeft: icon ? "44px" : "16px",
              background: COLORS.surfaceContainerLowest,
              border: focused
                ? `2px solid rgba(0,83,204,0.4)`
                : `2px solid transparent`,
              borderRadius: "12px",
              fontSize: "14px",
              outline: "none",
              transition: "border 0.2s",
              fontFamily: "Inter, sans-serif",
              color: COLORS.onSurface,
              resize: "vertical",
              boxSizing: "border-box",
            }}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              width: "100%",
              padding: "12px 16px",
              paddingLeft: icon ? "44px" : "16px",
              background: COLORS.surfaceContainerLowest,
              border: focused
                ? `2px solid rgba(0,83,204,0.4)`
                : `2px solid transparent`,
              borderRadius: "12px",
              fontSize: "14px",
              outline: "none",
              transition: "border 0.2s",
              fontFamily: "Inter, sans-serif",
              color: COLORS.onSurface,
              boxSizing: "border-box",
            }}
          />
        )}
      </div>
    </div>
  );
}
