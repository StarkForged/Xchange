import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../constants/colors";
import { EmptyState } from "../common/EmptyState";
import { TrustBadge } from "../common/TrustBadge";
import { InputField } from "../form/InputField";
import { PrimaryButton } from "../form/PrimaryButton";
import { Icon } from "../common/Icon";

// AdDetailPage shows a selected listing's full details and contact actions.
export function AdDetailPage() {
  const { selectedAd, user } = useAuth();
  const [inquiryText, setInquiryText] = useState("");
  const [sent, setSent] = useState(false);

  if (!selectedAd) {
    return (
      <div>
        <EmptyState
          icon="info"
          title="No listing selected"
          subtitle="Go back to browse listings"
        />
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 32px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "48px",
        }}
      >
        {/* Image section */}
        <div>
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              background: COLORS.surfaceContainerLow,
              aspectRatio: "4/3",
            }}
          >
            <img
              src={
                selectedAd.image ||
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop"
              }
              alt={selectedAd.title}
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop";
              }}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Details */}
        <div>
          <div style={{ marginBottom: "8px" }}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: COLORS.primary,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {selectedAd.category || "General"}
            </span>
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 800,
              fontFamily: "Manrope, sans-serif",
              marginBottom: "12px",
              lineHeight: 1.2,
            }}
          >
            {selectedAd.title}
          </h1>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 900,
              color: COLORS.primary,
              fontFamily: "Manrope, sans-serif",
              marginBottom: "20px",
            }}
          >
            {selectedAd.price}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "24px",
              color: COLORS.onSurfaceVariant,
              fontSize: "14px",
            }}
          >
            <Icon name="location_on" size="18px" />
            {selectedAd.location || "Not specified"}
            <span style={{ margin: "0 4px" }}>•</span>
            <Icon name="schedule" size="18px" />
            {selectedAd.posted || "Just posted"}
          </div>

          <div
            style={{
              background: COLORS.surfaceContainerLow,
              borderRadius: "20px",
              padding: "24px",
              marginBottom: "24px",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "12px",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Description
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: COLORS.onSurfaceVariant,
                lineHeight: 1.7,
              }}
            >
              {selectedAd.description || "No description provided."}
            </p>
          </div>

          {/* Seller info */}
          <div
            style={{
              background: COLORS.surfaceContainerLowest,
              borderRadius: "20px",
              padding: "24px",
              marginBottom: "24px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(selectedAd.seller || "Seller")}&background=d4e5ee&color=44545c&size=48&bold=true`}
                  alt="Seller"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=S&background=d4e5ee&color=44545c&size=48&bold=true`;
                  }}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: `2px solid ${COLORS.tertiaryContainer}`,
                  }}
                />
                <div>
                  <p style={{ fontWeight: 700, fontSize: "15px" }}>
                    {selectedAd.seller || "Seller"}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: COLORS.onSurfaceVariant,
                    }}
                  >
                    Member since 2024
                  </p>
                </div>
              </div>
              <TrustBadge score={selectedAd.trustScore || 0} />
            </div>
          </div>

          {/* Inquiry */}
          {user && (
            <div>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                Send Inquiry
              </h3>
              {sent ? (
                <div
                  style={{
                    padding: "20px",
                    background: "rgba(0,83,204,0.06)",
                    borderRadius: "14px",
                    textAlign: "center",
                    color: COLORS.primary,
                    fontWeight: 600,
                  }}
                >
                  <Icon
                    name="check_circle"
                    filled
                    size="28px"
                    style={{ marginBottom: "8px" }}
                  />
                  <p>Your inquiry has been sent to the seller!</p>
                </div>
              ) : (
                <>
                  <InputField
                    type="textarea"
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    placeholder="Hi, I'm interested in this item..."
                  />
                  <PrimaryButton
                    onClick={() => setSent(true)}
                    disabled={!inquiryText.trim()}
                    style={{ width: "100%" }}
                  >
                    Send Message
                  </PrimaryButton>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
