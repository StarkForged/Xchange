import { useState } from "react";
import { COLORS } from "../../constants/colors";
import { Icon } from "../common/Icon";
import { EmptyState } from "../common/EmptyState";

// Search page displays filters and listing search UI.
export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [filterOpen, setFilterOpen] = useState(false);

  const categories = [
    "All",
    "Electronics",
    "Vehicles",
    "Furniture",
    "Fashion",
    "Gaming",
    "Real Estate",
    "Services",
  ];

  const filterContent = (
    <div
      style={{
        background: COLORS.surfaceContainerLowest,
        borderRadius: "24px",
        padding: "28px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 800,
            fontFamily: "Manrope, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Icon name="tune" size="20px" style={{ color: COLORS.primary }} />
          Filters
        </h3>
        {/* Mobile close button */}
        <button
          className="search-filter-toggle"
          onClick={() => setFilterOpen(false)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "none",
          }}
        >
          <Icon name="close" size="20px" style={{ color: COLORS.onSurfaceVariant }} />
        </button>
      </div>

      {/* Category */}
      <div style={{ marginBottom: "24px" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: COLORS.onSurfaceVariant,
            marginBottom: "12px",
          }}
        >
          Category
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat.toLowerCase())}
              style={{
                padding: "8px 14px",
                borderRadius: "10px",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight:
                  selectedCategory === cat.toLowerCase() ? 600 : 400,
                background:
                  selectedCategory === cat.toLowerCase()
                    ? "rgba(0,83,204,0.08)"
                    : "transparent",
                color:
                  selectedCategory === cat.toLowerCase()
                    ? COLORS.primary
                    : COLORS.onSurfaceVariant,
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div style={{ marginBottom: "24px" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: COLORS.onSurfaceVariant,
            marginBottom: "12px",
          }}
        >
          Price Range
        </p>
        {[
          { label: "Any Price", value: "all" },
          { label: "Under $100", value: "0-100" },
          { label: "$100 - $500", value: "100-500" },
          { label: "$500 - $2000", value: "500-2000" },
          { label: "Over $2000", value: "2000+" },
        ].map((range) => (
          <button
            key={range.value}
            onClick={() => setPriceRange(range.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px 14px",
              borderRadius: "10px",
              border: "none",
              textAlign: "left",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: priceRange === range.value ? 600 : 400,
              background:
                priceRange === range.value
                  ? "rgba(0,83,204,0.08)"
                  : "transparent",
              color:
                priceRange === range.value
                  ? COLORS.primary
                  : COLORS.onSurfaceVariant,
              marginBottom: "2px",
              transition: "all 0.2s",
            }}
          >
            {range.label}
          </button>
        ))}
      </div>

      {/* Condition */}
      <div>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: COLORS.onSurfaceVariant,
            marginBottom: "12px",
          }}
        >
          Condition
        </p>
        {["New", "Like New", "Used", "Refurbished"].map((cond) => (
          <label
            key={cond}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 0",
              fontSize: "13px",
              color: COLORS.onSurfaceVariant,
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              style={{ accentColor: COLORS.primary, width: "16px", height: "16px" }}
            />
            {cond}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          gap: "32px",
          padding: "32px",
        }}
      >
        {/* Mobile filter backdrop */}
        {filterOpen && (
          <div
            onClick={() => setFilterOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.3)",
              zIndex: 49,
            }}
          />
        )}

        {/* Filters Sidebar */}
        <div
          className={`search-sidebar${filterOpen ? " open" : ""}`}
          style={{
            width: "280px",
            flexShrink: 0,
            position: "sticky",
            top: "104px",
            alignSelf: "flex-start",
          }}
        >
          {filterContent}
        </div>

        {/* Results */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "28px",
              alignItems: "center",
            }}
          >
            {/* Mobile filter toggle */}
            <button
              className="search-filter-toggle"
              onClick={() => setFilterOpen(true)}
              style={{
                display: "none",
                alignItems: "center",
                gap: "6px",
                padding: "10px 16px",
                background: COLORS.surfaceContainerLowest,
                border: "none",
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                color: COLORS.onSurface,
                flexShrink: 0,
              }}
            >
              <Icon name="tune" size="18px" style={{ color: COLORS.primary }} />
              Filters
            </button>

            <div style={{ position: "relative", flex: 1 }}>
              <Icon
                name="search"
                size="20px"
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: COLORS.outlineVariant,
                }}
              />
              <input
                type="text"
                placeholder="Search listings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px 14px 48px",
                  background: COLORS.surfaceContainerLowest,
                  border: "none",
                  borderRadius: "14px",
                  fontSize: "14px",
                  outline: "none",
                  fontFamily: "Inter, sans-serif",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: "14px 16px",
                background: COLORS.surfaceContainerLowest,
                border: "none",
                borderRadius: "14px",
                fontSize: "14px",
                fontFamily: "Inter, sans-serif",
                cursor: "pointer",
                color: COLORS.onSurface,
                flexShrink: 0,
              }}
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="trust">Trust Score</option>
            </select>
          </div>

          <EmptyState
            icon="search"
            title="No listings found"
            subtitle="Try adjusting your filters or check back later for new postings"
          />
        </div>
      </div>
    </div>
  );
}
