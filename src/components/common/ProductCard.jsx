import { useState } from "react";
import { COLORS } from "../../constants/colors";
import { Icon } from "./Icon";
import { TrustBadge } from "./TrustBadge";

export function ProductCard({ ad, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        background: COLORS.surfaceContainerLow,
        borderRadius: "24px",
        padding: "16px",
        transition: "all 0.5s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0px 24px 48px rgba(44,47,48,0.08)"
          : "0px 4px 12px rgba(44,47,48,0.03)",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "4/3",
          overflow: "hidden",
          borderRadius: "16px",
          background: COLORS.surfaceContainerLowest,
          marginBottom: "20px",
        }}
      >
        <img
          src={
            ad.image ||
            `https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop`
          }
          alt={ad.title || "Product"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.7s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            background: "rgba(0,83,204,0.9)",
            backdropFilter: "blur(8px)",
            color: COLORS.onPrimary,
            padding: "8px 16px",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          }}
        >
          {ad.price || "$0"}
        </div>
        {ad.badge && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: COLORS.tertiary,
              color: COLORS.onTertiary,
              padding: "4px 12px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Icon name="star" filled size="14px" />
            {ad.badge}
          </div>
        )}
      </div>
      <div style={{ padding: "0 8px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "16px",
            marginBottom: "8px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              fontFamily: "Manrope, sans-serif",
              color: hovered ? COLORS.primary : COLORS.onSurface,
              lineHeight: 1.3,
              transition: "color 0.3s",
            }}
          >
            {ad.title || "Untitled Listing"}
          </h3>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: COLORS.onSurfaceVariant,
              padding: 0,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Icon name="favorite" />
          </button>
        </div>
        <p
          style={{
            fontSize: "13px",
            color: COLORS.onSurfaceVariant,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "12px",
          }}
        >
          <Icon name="location_on" size="16px" />
          {ad.location || "Unknown"}
        </p>
        <div
          style={{
            paddingTop: "12px",
            borderTop: `1px solid rgba(171,173,174,0.15)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src={`https://ui-avatars.com/api/?name=${ad.seller || "User"}&background=d4e5ee&color=44545c&size=32&bold=true`}
              alt="Seller"
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <span
              style={{ fontSize: "12px", fontWeight: 600, color: COLORS.onSurface }}
            >
              {ad.seller || "Seller"}
            </span>
          </div>
          <TrustBadge score={ad.trustScore || 0} />
        </div>
      </div>
    </div>
  );
}
