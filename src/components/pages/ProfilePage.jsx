import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../constants/colors";
import { TrustBadge } from "../common/TrustBadge";
import { StatCard } from "../common/StatCard";
import { EmptyState } from "../common/EmptyState";
import { Icon } from "../common/Icon";

export function ProfilePage() {
  const { user, setCurrentPage } = useAuth();
  if (!user) return null;

  return (
    <div style={{ paddingTop: "72px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 32px 80px",
        }}
      >
        {/* Profile header */}
        <div
          style={{
            background: COLORS.surfaceContainerLowest,
            borderRadius: "28px",
            padding: "40px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: `0 0 0 3px ${COLORS.tertiaryContainer}`,
                position: "relative",
              }}
            >
              <img
                src={`https://ui-avatars.com/api/?name=${user.name}&background=779dff&color=fff&size=80&bold=true`}
                alt={user.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "-4px",
                  borderRadius: "50%",
                  border: `2px solid ${COLORS.tertiary}`,
                  opacity: 0.3,
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  fontFamily: "Manrope, sans-serif",
                  marginBottom: "4px",
                }}
              >
                {user.name}
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: COLORS.onSurfaceVariant,
                  marginBottom: "8px",
                }}
              >
                {user.email} •{" "}
                <span
                  style={{
                    textTransform: "capitalize",
                    fontWeight: 600,
                    color: COLORS.primary,
                  }}
                >
                  {user.role}
                </span>
              </p>
              <TrustBadge score={user.trustScore || 85} />
            </div>
            <button
              style={{
                background: COLORS.surfaceContainerLow,
                border: "none",
                padding: "10px 20px",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "13px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: COLORS.onSurface,
              }}
            >
              <Icon name="edit" size="16px" />
              Edit Profile
            </button>
          </div>

          {/* Trust Score Visual */}
          <div
            style={{
              background: `rgba(140,58,141,0.04)`,
              borderRadius: "20px",
              padding: "24px",
              border: `1px solid rgba(252,157,247,0.2)`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: COLORS.onSurfaceVariant,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "4px",
                  }}
                >
                  Trust Score
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span
                    style={{
                      fontSize: "36px",
                      fontWeight: 900,
                      fontFamily: "Manrope, sans-serif",
                      color: COLORS.tertiary,
                    }}
                  >
                    {user.trustScore || 85}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: COLORS.onSurfaceVariant,
                    }}
                  >
                    / 100
                  </span>
                </div>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  padding: "4px 12px",
                  background: COLORS.tertiaryContainer,
                  color: "#651468",
                  borderRadius: "999px",
                  fontWeight: 700,
                }}
              >
                Verified
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "8px",
                background: COLORS.surfaceContainer,
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${user.trustScore || 85}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${COLORS.tertiary}, ${COLORS.tertiaryContainer})`,
                  borderRadius: "999px",
                  transition: "width 1s ease",
                }}
              />
            </div>
          </div>
        </div>

        {/* Activity stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <StatCard
            icon="inventory_2"
            label="Total Listings"
            value="0"
            iconBg="rgba(0,83,204,0.05)"
            iconColor={COLORS.primary}
          />
          <StatCard
            icon="chat_bubble"
            label="Inquiries"
            value="0"
            iconBg={`rgba(140,58,141,0.05)`}
            iconColor={COLORS.tertiary}
          />
          <StatCard
            icon="handshake"
            label="Successful Deals"
            value="0"
            iconBg={COLORS.secondaryContainer}
            iconColor={COLORS.secondary}
          />
        </div>

        {/* Recent Activity */}
        <div
          style={{
            background: COLORS.surfaceContainerLowest,
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 800,
              fontFamily: "Manrope, sans-serif",
              marginBottom: "20px",
            }}
          >
            Recent Activity
          </h3>
          <EmptyState
            icon="history"
            title="No activity yet"
            subtitle="Your recent interactions will appear here"
          />
        </div>
      </div>
    </div>
  );
}
