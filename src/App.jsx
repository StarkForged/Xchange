import { useState, useCallback, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AuthContext, useAuth, authenticateUser, registerUser, isValidEmail, isValidPassword } from "./context/AuthContext";
import { COLORS } from "./constants/colors";
import { Loader } from "./components/common/Loader";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { LoginPage } from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { HomePage } from "./components/pages/HomePage";
import { SearchPage } from "./components/pages/SearchPage";
import { AdDetailPage } from "./components/pages/AdDetailPage";
import { PostAdPage } from "./components/pages/PostAdPage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { SellerDashboard } from "./components/pages/SellerDashboard";
import { AdminDashboard } from "./components/pages/AdminDashboard";
import { MessagesPage } from "./components/pages/MessagesPage";
import { ProtectedRoute } from "./components/common/ProtectedRoute";

// AppRoutes component that handles routing logic
function AppRoutes() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Loader fullPage />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.surface,
        fontFamily: "Inter, sans-serif",
        color: COLORS.onSurface,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #dadddf; border-radius: 10px; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
          .category-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .hero-header { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .hero-title { font-size: 36px !important; }
          .cta-section { padding: 40px 28px !important; }
          .cta-title { font-size: 30px !important; }
          .dashboard-layout { flex-direction: column !important; }
          .side-nav { display: none !important; }
          .side-nav.open { display: flex !important; position: fixed !important; top: 72px !important; left: 0 !important; height: calc(100vh - 72px) !important; z-index: 40 !important; box-shadow: 4px 0 24px rgba(0,0,0,0.12) !important; }
          .mobile-nav-toggle { display: flex !important; }
          .search-sidebar { display: none !important; }
          .search-sidebar.open { display: block !important; position: fixed !important; top: 0 !important; left: 0 !important; width: 300px !important; height: 100vh !important; z-index: 50 !important; overflow-y: auto !important; padding-top: 80px !important; }
          .search-filter-toggle { display: flex !important; }
        }
        @media (max-width: 480px) {
          .category-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        .mobile-hamburger { display: none; }
        .mobile-nav-toggle { display: none; }
        .search-filter-toggle { display: none; }
      `}</style>
      <Routes>
        <Route path="/" element={<><Navbar /><div style={{ flex: 1 }}><HomePage /></div><Footer /></>} />
        <Route path="/login" element={<><LoginPage /></>} />
        <Route path="/register" element={<><RegisterPage /></>} />
        <Route path="/search" element={<><Navbar /><div style={{ flex: 1 }}><SearchPage /></div><Footer /></>} />
        <Route path="/ad/:id" element={<><Navbar /><div style={{ flex: 1 }}><AdDetailPage /></div><Footer /></>} />
        <Route
          path="/post-ad"
          element={
            <><Navbar /><div style={{ flex: 1 }}>
              <ProtectedRoute>
                <PostAdPage />
              </ProtectedRoute>
            </div><Footer /></>
          }
        />
        <Route
          path="/profile"
          element={
            <><Navbar /><div style={{ flex: 1 }}>
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            </div><Footer /></>
          }
        />
        <Route
          path="/seller-dashboard"
          element={
            <><Navbar /><div style={{ flex: 1 }}>
              <ProtectedRoute>
                <SellerDashboard />
              </ProtectedRoute>
            </div><Footer /></>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <><Navbar /><div style={{ flex: 1 }}>
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            </div><Footer /></>
          }
        />
        <Route
          path="/messages"
          element={
            <><Navbar /><div style={{ flex: 1 }}>
              <ProtectedRoute>
                <MessagesPage />
              </ProtectedRoute>
            </div><Footer /></>
          }
        />
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

// AuthProvider component that provides auth context and navigation
function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAd, setSelectedAd] = useState(null);
  const [authError, setAuthError] = useState("");

  // Choose a default landing page based on user role.
  const getDefaultRouteForRole = (userData) => {
    if (!userData) return "/";
    return userData.role === "admin"
      ? "/admin-dashboard"
      : userData.role === "seller"
      ? "/seller-dashboard"
      : "/";
  };

  // Save or clear auth state in localStorage.
  const persistAuth = (userData) => {
    if (typeof window === "undefined") return;
    if (!userData) {
      localStorage.removeItem("xchange-auth");
      return;
    }
    localStorage.setItem(
      "xchange-auth",
      JSON.stringify({ user: userData })
    );
  };

  // Restore saved auth when the app loads. isLoading stays true until this runs.
  useEffect(() => {
    if (typeof window === "undefined") {
      setIsLoading(false);
      return;
    }

    try {
      const saved = localStorage.getItem("xchange-auth");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.user) {
          setUser(parsed.user);
        }
      }
    } catch (error) {
      console.warn("Failed to restore auth state:", error);
      localStorage.removeItem("xchange-auth");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle login submission, validate credentials, and persist auth state.
  const login = useCallback(({ email, password }) => {
    setAuthError("");

    const normalizedEmail = email?.trim().toLowerCase();
    const normalizedPassword = password?.trim();

    if (!normalizedEmail || !normalizedPassword) {
      setAuthError("Email and password are required");
      return;
    }

    if (!isValidEmail(normalizedEmail)) {
      setAuthError("Invalid email format");
      return;
    }

    // Authenticate against dummy user list.
    const authenticatedUser = authenticateUser(normalizedEmail, normalizedPassword);
    if (authenticatedUser) {
      setUser(authenticatedUser);
      const nextRoute = getDefaultRouteForRole(authenticatedUser);
      persistAuth(authenticatedUser);
      navigate(nextRoute);
    } else {
      setUser(null);
      setAuthError("Invalid email or password");
    }
  }, [navigate]);

  // Handle user registration and persist the new session.
  const register = useCallback((form) => {
    setAuthError("");

    // Validate using helper function
    const result = registerUser(form.name, form.email, form.password, form.confirmPassword, form.role);

    if (result.error) {
      setAuthError(result.error);
      return;
    }

    if (result.user) {
      setUser(result.user);
      const nextRoute = getDefaultRouteForRole(result.user);
      persistAuth(result.user);
      navigate(nextRoute);
    }
  }, [navigate]);

  // Remove auth state from memory and localStorage.
  const logout = useCallback(() => {
    setUser(null);
    setAuthError("");
    persistAuth(null);
    navigate("/");
  }, [navigate]);

  const ctxValue = {
    user,
    isLoading,
    login,
    register,
    logout,
    selectedAd,
    setSelectedAd,
    authError,
    setAuthError,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      {children}
    </AuthContext.Provider>
  );
}

// App root manages authentication state and localStorage persistence.
export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
