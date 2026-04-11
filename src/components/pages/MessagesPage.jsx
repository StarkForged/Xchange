import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../constants/colors";
import { EmptyState } from "../common/EmptyState";
import { Icon } from "../common/Icon";

// Messages page shows the user's conversation list and chat input.
export function MessagesPage() {
  const { user } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {/* Conversation List */}
      <div
        style={{
          width: "340px",
          background: COLORS.surfaceContainerLow,
          display: "flex",
          flexDirection: "column",
          borderRight: `1px solid ${COLORS.surfaceContainer}`,
        }}
      >
        <div style={{ padding: "24px" }}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 800,
              fontFamily: "Manrope, sans-serif",
              marginBottom: "16px",
            }}
          >
            Messages
          </h2>
          <div style={{ position: "relative" }}>
            <Icon
              name="search"
              size="18px"
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: COLORS.outlineVariant,
              }}
            />
            <input
              placeholder="Search conversations..."
              style={{
                width: "100%",
                padding: "10px 14px 10px 42px",
                background: COLORS.surfaceContainerLowest,
                border: "none",
                borderRadius: "12px",
                fontSize: "13px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
        <div style={{ flex: 1, overflow: "auto", padding: "0 12px 12px" }}>
          <EmptyState
            icon="chat_bubble"
            title="No conversations"
            subtitle="Start a conversation by sending an inquiry on a listing"
          />
        </div>
      </div>

      {/* Chat Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          background: COLORS.surfaceContainerLowest,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "20px",
                background: COLORS.surfaceContainerLow,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <Icon
                name="forum"
                size="32px"
                style={{ color: COLORS.outlineVariant }}
              />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                fontFamily: "Manrope, sans-serif",
                marginBottom: "6px",
              }}
            >
              Your conversations
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: COLORS.onSurfaceVariant,
              }}
            >
              Select a conversation or start a new one
            </p>
          </div>
        </div>

        {/* Input */}
        <div style={{ padding: "24px" }}>
          <div
            style={{
              background: COLORS.surfaceContainerLow,
              borderRadius: "20px",
              padding: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "4px",
                padding: "8px 8px 4px",
              }}
            >
              {["add_a_photo", "payments", "location_on"].map((icon) => (
                <button
                  key={icon}
                  style={{
                    padding: "8px",
                    background: "transparent",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    color: COLORS.secondary,
                  }}
                >
                  <Icon name={icon} size="20px" />
                </button>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 12px 8px",
              }}
            >
              <input
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  border: "none",
                  background: "transparent",
                  fontSize: "14px",
                  outline: "none",
                  padding: "8px 0",
                }}
              />
              <button
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryContainer})`,
                  border: "none",
                  color: COLORS.onPrimary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,83,204,0.2)",
                }}
              >
                <Icon name="send" size="18px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
