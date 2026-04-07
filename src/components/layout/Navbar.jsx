import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../constants/colors";
import { Icon } from "../common/Icon";

// Navbar displays app navigation and auth actions based on current user.
export function Navbar() {
  const { user, logout, setCurrentPage } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks =
    user?.role === "admin"
      ? [
          { label: "Dashboard", page: "admin-dashboard" },
          { label: "Manage Users", page: "admin-users" },
          { label: "Categories", page: "admin-categories" },
        ]
      : user?.role === "seller"
      ? [
          { label: "Dashboard", page: "seller-dashboard" },
          { label: "My Listings", page: "seller-listings" },
          { label: "Browse", page: "home" },
        ]
      : [
          { label: "Browse", page: "home" },
          { label: "Categories", page: "search" },
          { label: "Deals", page: "search" },
        ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(255,255,255,0.8)",
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
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <div
            onClick={() => setCurrentPage("home")}
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
            style={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                onClick={() => setCurrentPage(link.page)}
                style={{
                  color: COLORS.secondary,
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "color 0.3s",
                  fontFamily: "Manrope, sans-serif",
                }}
                onMouseOver={(e) => (e.target.style.color = COLORS.primary)}
                onMouseOut={(e) => (e.target.style.color = COLORS.secondary)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {user ? (
            <>
              <button
                onClick={() => setCurrentPage("messages")}
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
                <Icon name="chat_bubble" className="" />
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
                  onClick={() => setCurrentPage("post-ad")}
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
                onClick={() => setCurrentPage("profile")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: `0 0 0 2px ${COLORS.tertiaryContainer}`,
                  position: "relative",
                }}
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${user.name}&background=779dff&color=fff&bold=true`}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
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
                onClick={() => setCurrentPage("login")}
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
                onClick={() => setCurrentPage("register")}
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
      </div>
    </nav>
  );
}
