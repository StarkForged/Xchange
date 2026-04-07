import { useState } from "react";
import { COLORS } from "../../constants/colors";
import { SideNav } from "../layout/SideNav";
import { StatCard } from "../common/StatCard";
import { EmptyState } from "../common/EmptyState";
import { PrimaryButton } from "../form/PrimaryButton";
import { Icon } from "../common/Icon";

// Admin dashboard provides top-level platform overview and moderation controls.
export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const sideItems = [
    { id: "overview", icon: "dashboard", label: "Overview" },
    { id: "listings", icon: "inventory_2", label: "Listings" },
    { id: "users", icon: "group", label: "Users" },
    { id: "categories", icon: "category", label: "Categories" },
    { id: "moderation", icon: "verified_user", label: "Moderation" },
  ];

  return (
    <div style={{ paddingTop: "72px", display: "flex" }}>
      <SideNav items={sideItems} active={activeTab} onSelect={setActiveTab} />
      <main style={{ flex: 1, padding: "32px", minHeight: "calc(100vh - 72px)" }}>
        {activeTab === "overview" && (
          <>
            <div style={{ marginBottom: "28px" }}>
              <h1
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  fontFamily: "Manrope, sans-serif",
                  marginBottom: "4px",
                }}
              >
                Platform Overview
              </h1>
              <p style={{ color: COLORS.onSurfaceVariant, fontSize: "14px" }}>
                Monitor and manage your marketplace
              </p>
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
                icon="group"
                label="Total Users"
                value="0"
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
                icon="pending"
                label="Pending Approval"
                value="0"
                iconBg="rgba(179,27,37,0.05)"
                iconColor={COLORS.error}
              />
              <StatCard
                icon="trending_up"
                label="Platform Revenue"
                value="$0"
                iconBg={COLORS.secondaryContainer}
                iconColor={COLORS.secondary}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "8fr 4fr",
                gap: "20px",
                marginBottom: "24px",
              }}
            >
              {/* Pending Ads */}
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
                    Pending Advertisements
                  </h3>
                </div>
                <EmptyState
                  icon="pending"
                  title="No pending ads"
                  subtitle="All advertisements have been reviewed"
                />
              </div>

              {/* System Health */}
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
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Icon
                    name="health_and_safety"
                    style={{ color: COLORS.primary }}
                    size="20px"
                  />
                  System Health
                </h3>
                {[
                  { label: "Server Load", value: "24%", color: COLORS.primary, width: "24%" },
                  { label: "Storage", value: "12%", color: COLORS.secondary, width: "12%" },
                  { label: "Uptime", value: "99.9%", color: COLORS.tertiary, width: "99%" },
                ].map((item) => (
                  <div key={item.label} style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: COLORS.onSurfaceVariant,
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 900,
                          color: item.color,
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "6px",
                        background: COLORS.surfaceContainerLow,
                        borderRadius: "999px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: item.width,
                          height: "100%",
                          background: `linear-gradient(90deg, ${item.color}, ${COLORS.primaryContainer})`,
                          borderRadius: "999px",
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Recent Actions */}
                <div style={{ marginTop: "24px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: COLORS.onSurfaceVariant,
                      marginBottom: "12px",
                    }}
                  >
                    Recent Actions
                  </p>
                  <EmptyState
                    icon="history"
                    title=""
                    subtitle="No recent moderation actions"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "users" && (
          <>
            <h1
              style={{
                fontSize: "26px",
                fontWeight: 800,
                fontFamily: "Manrope, sans-serif",
                marginBottom: "28px",
              }}
            >
              User Management
            </h1>
            <div
              style={{
                background: COLORS.surfaceContainerLowest,
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              }}
            >
              <EmptyState
                icon="group"
                title="No users to display"
                subtitle="Registered users will appear here"
              />
            </div>
          </>
        )}

        {activeTab === "categories" && (
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
                Category Management
              </h1>
              <PrimaryButton>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Icon name="add" size="18px" />
                  Add Category
                </span>
              </PrimaryButton>
            </div>
            <div
              style={{
                background: COLORS.surfaceContainerLowest,
                borderRadius: "24px",
                padding: "28px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              }}
            >
              <EmptyState
                icon="category"
                title="No categories yet"
                subtitle="Add categories to organize your marketplace listings"
              />
            </div>
          </>
        )}

        {(activeTab === "listings" || activeTab === "moderation") && (
          <>
            <h1
              style={{
                fontSize: "26px",
                fontWeight: 800,
                fontFamily: "Manrope, sans-serif",
                marginBottom: "28px",
              }}
            >
              {activeTab === "listings"
                ? "All Listings"
                : "Content Moderation"}
            </h1>
            <div
              style={{
                background: COLORS.surfaceContainerLowest,
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              }}
            >
              <EmptyState
                icon={
                  activeTab === "listings" ? "inventory_2" : "shield"
                }
                title={`No ${activeTab === "listings" ? "listings" : "items to moderate"}`}
                subtitle={
                  activeTab === "listings"
                    ? "Marketplace listings will appear here"
                    : "Flagged content will appear here for review"
                }
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
}
