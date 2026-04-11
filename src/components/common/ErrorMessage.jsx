import { COLORS } from "../../constants/colors";
import { Icon } from "./Icon";

// ErrorMessage displays a styled error banner. Returns null when no message is set.
export function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 16px",
        background: "rgba(179,27,37,0.06)",
        borderRadius: "10px",
        color: COLORS.error,
        fontSize: "13px",
        marginBottom: "16px",
        border: "1px solid rgba(179,27,37,0.12)",
      }}
    >
      <Icon name="error" size="16px" style={{ flexShrink: 0 }} />
      {message}
    </div>
  );
}
