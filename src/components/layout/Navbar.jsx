import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../constants/colors";
import { Icon } from "../common/Icon";

// Navbar displays app navigation and auth actions based on current user.
export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks =
    user?.role === "admin"
      ? [
          { label: "Dashboard", path: "/admin-dashboard" },
          { label: "Manage Users", path: "/admin-dashboard" },
          { label: "Categories", path: "/admin-dashboard" },
        ]
      : user?.role === "seller"
      ? [
          { label: "Dashboard", path: "/seller-dashboard" },
          { label: "My Listings", path: "/seller-dashboard" },
          { label: "Browse", path: "/" },
        ]
      : [
          { label: "Browse", path: "/" },
          { label: "Categories", path: "/search" },
          { label: "Deals", path: "/search" },
        ];

  const linkStyle = {
    color: COLORS.secondary,
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "color 0.3s",
    fontFamily: "Manrope, sans-serif",
    textDecoration: "none",
  };

  const mobileLinkStyle = {
    ...linkStyle,
    fontSize: "16px",
    fontWeight: 600,
    padding: "12px 0",
    borderBottom: `1px solid ${COLORS.surfaceContainerLow}`,
    display: "block",
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 50,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0px 12px 32px rgba(44,47,48,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "72px",
            padding: "0 32px",
            maxWidth: "1440px",
            margin: "0 auto",
          }}
        >
          {/* Logo + desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <div
              onClick={() => { navigate("/"); setMobileOpen(false); }}
              style={{
                fontSize: "22px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: COLORS.primary,
                fontFamily: "Manrope, sans-serif",
                cursor: "pointer",
              }}
            >
              Xchange
            </div>
            <div
              className="desktop-nav"
              style={{ display: "flex", gap: "28px", alignItems: "center" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  style={linkStyle}
                  onMouseOver={(e) => (e.target.style.color = COLORS.primary)}
                  onMouseOut={(e) => (e.target.style.color = COLORS.secondary)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: desktop actions + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Desktop actions */}
            <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              {user ? (
                <>
                  <button
                    onClick={() => navigate("/messages")}
                    style={{
                      padding: "8px",
                      borderRadius: "50%",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background = "rgba(0,0,0,0.04)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <Icon name="chat_bubble" />
                  </button>
                  <button
                    style={{
                      padding: "8px",
                      borderRadius: "50%",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    <Icon name="notifications" />
                    <span
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        width: 8,
                        height: 8,
                        background: COLORS.error,
                        borderRadius: "50%",
                      }}
                    />
                  </button>
                  {(user.role === "seller" || user.role === "buyer") && (
                    <button
                      onClick={() => navigate("/post-ad")}
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryContainer})`,
                        color: COLORS.onPrimary,
                        padding: "10px 24px",
                        borderRadius: "12px",
                        border: "none",
                        fontWeight: 700,
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        boxShadow: "0 4px 12px rgba(0,83,204,0.2)",
                      }}
                    >
                      Post Listing
                    </button>
                  )}
                  <div
                    onClick={() => navigate("/profile")}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      overflow: "hidden",
                      cursor: "pointer",
                      boxShadow: `0 0 0 2px ${COLORS.tertiaryContainer}`,
                    }}
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=779dff&color=fff&bold=true`}
                      alt="Profile"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=U&background=779dff&color=fff&bold=true`;
                      }}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <button
                    onClick={logout}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "8px",
                      borderRadius: "50%",
                    }}
                  >
                    <Icon name="logout" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: COLORS.primary,
                      fontWeight: 600,
                      fontSize: "14px",
                      cursor: "pointer",
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryContainer})`,
                      color: COLORS.onPrimary,
                      padding: "10px 24px",
                      borderRadius: "12px",
                      border: "none",
                      fontWeight: 700,
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>

            {/* Hamburger — visible only on mobile via CSS */}
            <button
              className="mobile-hamburger"
              onClick={() => setMobileOpen((o) => !o)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "10px",
                color: COLORS.onSurface,
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <Icon name={mobileOpen ? "close" : "menu"} size="24px" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.3)",
              zIndex: 45,
              top: "72px",
            }}
          />
          {/* Drawer */}
          <div
            style={{
              position: "fixed",
              top: "72px",
              left: 0,
              right: 0,
              background: COLORS.surfaceContainerLowest,
              zIndex: 46,
              padding: "24px 32px 32px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            <nav style={{ marginBottom: "24px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  style={mobileLinkStyle}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {user ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 0",
                  }}
                >
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=779dff&color=fff&bold=true`}
                    alt="Profile"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=U&background=779dff&color=fff&bold=true`;
                    }}
                    style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }}
                  />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "15px" }}>{user.name}</p>
                    <p style={{ fontSize: "12px", color: COLORS.onSurfaceVariant }}>{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => { navigate("/profile"); setMobileOpen(false); }}
                  style={{
                    background: COLORS.surfaceContainerLow,
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  My Profile
                </button>
                {(user.role === "seller" || user.role === "buyer") && (
                  <button
                    onClick={() => { navigate("/post-ad"); setMobileOpen(false); }}
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryContainer})`,
                      color: COLORS.onPrimary,
                      border: "none",
                      borderRadius: "12px",
                      padding: "12px",
                      fontWeight: 700,
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    Post Listing
                  </button>
                )}
                <button
                  onClick={() => { logout(); setMobileOpen(false); }}
                  style={{
                    background: "rgba(179,27,37,0.06)",
                    color: COLORS.error,
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <button
                  onClick={() => { navigate("/login"); setMobileOpen(false); }}
                  style={{
                    background: COLORS.surfaceContainerLow,
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: "pointer",
                    color: COLORS.primary,
                  }}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { navigate("/register"); setMobileOpen(false); }}
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryContainer})`,
                    color: COLORS.onPrimary,
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px",
                    fontWeight: 700,
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
