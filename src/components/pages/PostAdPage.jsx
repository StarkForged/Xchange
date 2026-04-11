import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../constants/colors";
import { EmptyState } from "../common/EmptyState";
import { InputField } from "../form/InputField";
import { SelectField } from "../form/SelectField";
import { PrimaryButton } from "../form/PrimaryButton";
import { Icon } from "../common/Icon";
import { usePostAdForm } from "../../hooks/usePostAdForm";

// PostAdPage allows authenticated users to create a new marketplace listing.
export function PostAdPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const { form, update, errors, handleBlur, handleSubmit } = usePostAdForm(
    () => setSubmitted(true)
  );

  if (!user) {
    return (
      <EmptyState
        icon="lock"
        title="Sign in required"
        subtitle="You need to be logged in to post a listing"
      />
    );
  }

  if (submitted) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "rgba(0,83,204,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <Icon
              name="check_circle"
              filled
              size="40px"
              style={{ color: COLORS.primary }}
            />
          </div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 800,
              fontFamily: "Manrope, sans-serif",
              marginBottom: "8px",
            }}
          >
            Listing Submitted!
          </h2>
          <p style={{ color: COLORS.onSurfaceVariant, marginBottom: "24px" }}>
            Your ad will be reviewed and published shortly.
          </p>
          <PrimaryButton onClick={() => navigate("/")}>
            Back to Home
          </PrimaryButton>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "40px 32px 80px",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 800,
            fontFamily: "Manrope, sans-serif",
            marginBottom: "32px",
          }}
        >
          Create New Listing
        </h1>
        <div
          style={{
            background: COLORS.surfaceContainerLowest,
            borderRadius: "24px",
            padding: "36px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
          }}
        >
          <InputField
            label="Title *"
            value={form.title}
            onChange={update("title")}
            onBlur={() => handleBlur("title")}
            placeholder="What are you selling?"
            error={errors.title}
          />
          <InputField
            label="Description"
            type="textarea"
            value={form.description}
            onChange={update("description")}
            placeholder="Describe your item in detail..."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <InputField
              label="Price *"
              value={form.price}
              onChange={update("price")}
              onBlur={() => handleBlur("price")}
              placeholder="0.00"
              icon="payments"
              error={errors.price}
            />
            <InputField
              label="Location"
              value={form.location}
              onChange={update("location")}
              placeholder="City, State"
              icon="location_on"
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <SelectField
              label="Category *"
              value={form.category}
              onChange={update("category")}
              onBlur={() => handleBlur("category")}
              error={errors.category}
              options={[
                { value: "", label: "Select category" },
                { value: "electronics", label: "Electronics" },
                { value: "vehicles", label: "Vehicles" },
                { value: "furniture", label: "Furniture" },
                { value: "fashion", label: "Fashion" },
                { value: "gaming", label: "Gaming" },
                { value: "real-estate", label: "Real Estate" },
                { value: "services", label: "Services" },
              ]}
            />
            <SelectField
              label="Condition"
              value={form.condition}
              onChange={update("condition")}
              options={[
                { value: "new", label: "Brand New" },
                { value: "like-new", label: "Like New" },
                { value: "used", label: "Used" },
                { value: "refurbished", label: "Refurbished" },
              ]}
            />
          </div>

          {/* Image Upload */}
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 600,
                color: COLORS.onSurfaceVariant,
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Photos
            </label>
            <div
              style={{
                border: `2px dashed ${COLORS.outlineVariant}`,
                borderRadius: "16px",
                padding: "40px",
                textAlign: "center",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.borderColor = COLORS.primary)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.borderColor = COLORS.outlineVariant)
              }
            >
              <Icon
                name="add_a_photo"
                size="36px"
                style={{ color: COLORS.outlineVariant, marginBottom: "12px" }}
              />
              <p
                style={{
                  fontSize: "14px",
                  color: COLORS.onSurfaceVariant,
                  marginBottom: "4px",
                }}
              >
                Click to upload or drag and drop
              </p>
              <p style={{ fontSize: "12px", color: COLORS.outlineVariant }}>
                PNG, JPG up to 10MB. Max 8 images.
              </p>
            </div>
          </div>

          <PrimaryButton
            onClick={handleSubmit}
            style={{ width: "100%", padding: "14px" }}
          >
            Publish Listing
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
