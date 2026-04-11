import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import { Icon } from "../common/Icon";
import { EmptyState } from "../common/EmptyState";

// Home page is the public landing page with search and category browsing.
export function HomePage() {
  const navigate = useNavigate();

  const categories = [
    { icon: "devices", label: "Electronics" },
    { icon: "directions_car", label: "Vehicles" },
    { icon: "chair", label: "Furniture" },
    { icon: "checkroom", label: "Fashion" },
    { icon: "sports_esports", label: "Gaming" },
    { icon: "home", label: "Real Estate" },
    { icon: "handyman", label: "Services" },
    { icon: "more_horiz", label: "Others" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: "80px 32px 60px",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "40px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "52px",
                fontWeight: 900,
                fontFamily: "Manrope, sans-serif",
                color: COLORS.onSurface,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}
            >
              Discover. Connect.
              <br />
              <span style={{ color: COLORS.primary }}>Exchange.</span>
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: COLORS.onSurfaceVariant,
                maxWidth: "480px",
                lineHeight: 1.6,
              }}
            >
              Your trusted marketplace for finding what you need or selling what
              you don't. Verified sellers, transparent deals.
            </p>
          </div>
          <button
            onClick={() => navigate("/search")}
            style={{
              background: COLORS.surfaceContainerLow,
              border: "none",
              padding: "12px 24px",
              borderRadius: "14px",
              fontSize: "14px",
              fontWeight: 600,
              color: COLORS.primary,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            View All Listings
            <Icon name="arrow_forward" size="18px" />
          </button>
        </div>
        {/* Search */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <div style={{ position: "relative", flex: 1 }}>
            <Icon
              name="search"
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                color: COLORS.outlineVariant,
              }}
            />
            <input
              type="text"
              placeholder="Search for anything..."
              onFocus={() => navigate("/search")}
              style={{
                width: "100%",
                padding: "16px 20px 16px 56px",
                background: COLORS.surfaceContainerLowest,
                border: "none",
                borderRadius: "16px",
                fontSize: "15px",
                outline: "none",
                fontFamily: "Inter, sans-serif",
                color: COLORS.onSurface,
                boxSizing: "border-box",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              }}
            />
          </div>
          <button
            onClick={() => navigate("/search")}
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryContainer})`,
              color: COLORS.onPrimary,
              padding: "16px 32px",
              borderRadius: "16px",
              border: "none",
              fontWeight: 700,
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(0,83,204,0.2)",
            }}
          >
            Search
          </button>
        </div>
        {/* Categories */}
        <div
          className="category-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.label}
              onClick={() => navigate("/search")}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                padding: "20px 12px",
                background: COLORS.surfaceContainerLowest,
                borderRadius: "16px",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.06)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0,0,0,0.03)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "14px",
                  background: `rgba(0,83,204,0.06)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.primary,
                }}
              >
                <Icon name={cat.icon} size="24px" />
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: COLORS.onSurface,
                }}
              >
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section
        style={{
          padding: "0 32px 60px",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            fontFamily: "Manrope, sans-serif",
            marginBottom: "32px",
          }}
        >
          Fresh Listings
        </h2>
        <EmptyState
          icon="inventory_2"
          title="No listings yet"
          subtitle="Be the first to post a listing on Xchange"
        />
      </section>

      {/* CTA */}
      <section style={{ padding: "0 32px 80px", maxWidth: "1440px", margin: "0 auto" }}>
        <div
          style={{
            borderRadius: "32px",
            overflow: "hidden",
            background: COLORS.onSurface,
            padding: "72px 64px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50%",
              height: "100%",
              background: `linear-gradient(to left, rgba(0,72,179,0.2), transparent)`,
            }}
          />
          <div style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
            <h2
              style={{
                fontSize: "44px",
                fontWeight: 900,
                fontFamily: "Manrope, sans-serif",
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Turn Your Assets Into{" "}
              <span style={{ color: COLORS.primaryContainer }}>
                Opportunity.
              </span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "17px",
                lineHeight: 1.6,
                marginBottom: "32px",
              }}
            >
              Join thousands of verified sellers. Post your first listing
              today with zero fees for your first 30 days.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <button
                onClick={() => navigate("/post-ad")}
                style={{
                  background: COLORS.primaryContainer,
                  color: "#000",
                  padding: "16px 32px",
                  borderRadius: "16px",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "15px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Post Your Listing
                <Icon name="add_circle" size="20px" />
              </button>
              <button
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  color: "#fff",
                  padding: "16px 32px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  fontWeight: 700,
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Seller Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
