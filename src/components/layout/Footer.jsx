import { COLORS } from "../../constants/colors";

// Footer contains static site links and branding for the marketplace.
export function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#fafbfc",
        padding: "48px 32px",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "32px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "20px",
              color: COLORS.onSurface,
              marginBottom: "12px",
            }}
          >
            Xchange
          </div>
          <p
            style={{
              fontSize: "13px",
              color: COLORS.onSurfaceVariant,
              maxWidth: "280px",
              lineHeight: 1.6,
            }}
          >
            The trusted marketplace for buying and selling. Experience
            transparency with every exchange.
          </p>
          <div
            style={{
              marginTop: "16px",
              fontSize: "13px",
              color: COLORS.primary,
            }}
          >
            © 2026 Xchange. All rights reserved.
          </div>
        </div>
        {[
          {
            title: "Platform",
            links: ["About Us", "Safety Center", "Trust & Verification"],
          },
          { title: "Legal", links: ["Terms of Service", "Privacy Policy"] },
          { title: "Support", links: ["Contact Support", "Help Center"] },
        ].map((col) => (
          <div key={col.title}>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: COLORS.onSurfaceVariant,
                marginBottom: "16px",
              }}
            >
              {col.title}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: "13px",
                    color: COLORS.onSurfaceVariant,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = COLORS.primary)}
                  onMouseOut={(e) =>
                    (e.target.style.color = COLORS.onSurfaceVariant)
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
