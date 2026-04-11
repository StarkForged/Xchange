import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../constants/colors";
import { SideNav } from "../layout/SideNav";
import { StatCard } from "../common/StatCard";
import { EmptyState } from "../common/EmptyState";
import { PrimaryButton } from "../form/PrimaryButton";
import { Icon } from "../common/Icon";

// Seller dashboard shows key metrics and quick actions for sellers.
export function SellerDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const sideItems = [
    { id: "overview", icon: "dashboard", label: "Overview" },
    { id: "listings", icon: "inventory_2", label: "Listings" },
    { id: "sales", icon: "payments", label: "Sales" },
    { id: "inquiries", icon: "chat_bubble", label: "Inquiries" },
    { id: "analytics", icon: "analytics", label: "Analytics" },
  ];

  return (
    <div className="dashboard-layout" style={{ display: "flex" }}>
      {/* Mobile overlay backdrop */}
      {sideNavOpen && (
        <div
          onClick={() => setSideNavOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            top: "72px",
            background: "rgba(0,0,0,0.3)",
            zIndex: 39,
          }}
        />
      )}
      <SideNav
        items={sideItems}
        active={activeTab}
        onSelect={setActiveTab}
        open={sideNavOpen}
        onClose={() => setSideNavOpen(false)}
      />
      <main style={{ flex: 1, padding: "32px", minHeight: "calc(100vh - 72px)" }}>
        {/* Mobile sidebar toggle */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setSideNavOpen(true)}
          style={{
            marginBottom: "20px",
            display: "none",
            alignItems: "center",
            gap: "8px",
            background: COLORS.surfaceContainerLow,
            border: "none",
            borderRadius: "10px",
            padding: "10px 16px",
            fontWeight: 600,
            fontSize: "14px",
            cursor: "pointer",
            color: COLORS.onSurface,
          }}
        >
          <Icon name="menu" size="20px" />
          Menu
        </button>
        {activeTab === "overview" && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "28px",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "26px",
                    fontWeight: 800,
                    fontFamily: "Manrope, sans-serif",
                    marginBottom: "4px",
                  }}
                >
                  Welcome back, {user?.name || "Seller"}
                </h1>
                <p style={{ color: COLORS.onSurfaceVariant, fontSize: "14px" }}>
                  Here's your dashboard overview
                </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
                marginBottom: "28px",
              }}
            >
              <StatCard
                icon="trending_up"
                label="Total Revenue"
                value="$0"
                iconBg="rgba(0,83,204,0.05)"
                iconColor={COLORS.primary}
              />
              <StatCard
                icon="inventory_2"
                label="Active Listings"
                value="0"
                iconBg={`rgba(140,58,141,0.05)`}
                iconColor={COLORS.tertiary}
              />
              <StatCard
                icon="visibility"
                label="Total Views"
                value="0"
                iconBg={COLORS.secondaryContainer}
                iconColor={COLORS.secondary}
              />
              <StatCard
                icon="star"
                label="Seller Rating"
                value="--"
                iconBg="rgba(140,58,141,0.05)"
                iconColor={COLORS.tertiary}
                extra={
                  <span
                    style={{
                      fontSize: "10px",
                      padding: "3px 8px",
                      background: COLORS.tertiaryContainer,
                      color: "#651468",
                      borderRadius: "999px",
                      fontWeight: 700,
                    }}
                  >
                    New Seller
                  </span>
                }
              />
            </div>

            {/* Performance overview */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr",
                gap: "20px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  background: COLORS.surfaceContainerLowest,
                  borderRadius: "24px",
                  padding: "28px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    fontFamily: "Manrope, sans-serif",
                    marginBottom: "20px",
                  }}
                >
                  Performance Metrics
                </h3>
                {["Response Rate", "Listing Quality", "Conversion Rate"].map(
                  (metric) => (
                    <div key={metric} style={{ marginBottom: "16px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "13px",
                          marginBottom: "6px",
                        }}
                      >
                        <span style={{ color: COLORS.onSurfaceVariant }}>
                          {metric}
                        </span>
                        <span style={{ fontWeight: 700 }}>0%</span>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "8px",
                          background: COLORS.surfaceContainer,
                          borderRadius: "999px",
                        }}
                      >
                        <div
                          style={{
                            width: "0%",
                            height: "100%",
                            background: COLORS.primary,
                            borderRadius: "999px",
                          }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>

              <div
                style={{
                  background: COLORS.surfaceContainerLowest,
                  borderRadius: "24px",
                  padding: "28px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    fontFamily: "Manrope, sans-serif",
                    marginBottom: "20px",
                  }}
                >
                  Quick Actions
                </h3>
                {[
                  { icon: "add_circle", label: "Create Listing", color: COLORS.primary },
                  { icon: "analytics", label: "View Analytics", color: COLORS.tertiary },
                  { icon: "settings", label: "Account Settings", color: COLORS.secondary },
                ].map((action) => (
                  <div
                    key={action.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px",
                      borderRadius: "12px",
                      cursor: "pointer",
                      marginBottom: "6px",
                      transition: "background 0.2s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background =
                        COLORS.surfaceContainerLow)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "12px",
                        background: `${action.color}10`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: action.color,
                      }}
                    >
                      <Icon name={action.icon} size="20px" />
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: 600 }}>
                      {action.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div
              style={{
                background: COLORS.surfaceContainerLowest,
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              }}
            >
              <div
                style={{
                  padding: "24px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: `1px solid ${COLORS.surfaceContainerLow}`,
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  Recent Transactions
                </h3>
                <button
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: COLORS.primary,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  View All
                </button>
              </div>
              <EmptyState
                icon="receipt_long"
                title="No transactions yet"
                subtitle="Your sales and transactions will appear here"
              />
            </div>
          </>
        )}

        {activeTab === "listings" && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "28px",
              }}
            >
              <h1
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                My Listings
              </h1>
              <PrimaryButton>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Icon name="add" size="18px" />
                  New Listing
                </span>
              </PrimaryButton>
            </div>
            <div
              style={{
                background: COLORS.surfaceContainerLowest,
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              }}
            >
              <EmptyState
                icon="inventory_2"
                title="No listings yet"
                subtitle="Create your first listing to get started"
              />
            </div>
          </>
        )}

        {(activeTab === "sales" ||
          activeTab === "inquiries" ||
          activeTab === "analytics") && (
          <EmptyState
            icon={
              activeTab === "sales"
                ? "payments"
                : activeTab === "inquiries"
                ? "chat_bubble"
                : "analytics"
            }
            title={`No ${activeTab} data`}
            subtitle={`Your ${activeTab} information will show here once you start trading`}
          />
        )}
      </main>
    </div>
  );
}
