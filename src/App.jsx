import { useState, useCallback } from "react";
import { AuthContext, useAuth, authenticateUser, registerUser, isValidEmail, isValidPassword } from "./context/AuthContext";
import { COLORS } from "./constants/colors";
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

export default function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedAd, setSelectedAd] = useState(null);
  const [authError, setAuthError] = useState("");

  const login = useCallback(({ email, password }) => {
    setAuthError("");
    
    // Validate inputs
    if (!email || !password) {
      setAuthError("Email and password are required");
      return;
    }

    if (!isValidEmail(email)) {
      setAuthError("Invalid email format");
      return;
    }

    // Authenticate against dummy users
    const authenticatedUser = authenticateUser(email, password);
    if (authenticatedUser) {
      setUser(authenticatedUser);
      // Route based on role
      const nextPage = authenticatedUser.role === "admin" 
        ? "admin-dashboard" 
        : authenticatedUser.role === "seller" 
        ? "seller-dashboard" 
        : "home";
      setCurrentPage(nextPage);
    } else {
      setAuthError("Invalid email or password");
    }
  }, []);

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
      const nextPage = result.user.role === "seller" ? "seller-dashboard" : "home";
      setCurrentPage(nextPage);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setCurrentPage("home");
    setAuthError("");
  }, []);

  const ctxValue = {
    user,
    login,
    register,
    logout,
    currentPage,
    setCurrentPage,
    selectedAd,
    setSelectedAd,
    authError,
    setAuthError,
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage />;
      case "register":
        return <RegisterPage />;
      case "home":
        return <HomePage />;
      case "search":
        return <SearchPage />;
      case "ad-detail":
        return <AdDetailPage />;
      case "post-ad":
        return <PostAdPage />;
      case "profile":
        return <ProfilePage />;
      case "seller-dashboard":
      case "seller-listings":
        return <SellerDashboard />;
      case "admin-dashboard":
      case "admin-users":
      case "admin-categories":
        return <AdminDashboard />;
      case "messages":
        return <MessagesPage />;
      default:
        return <HomePage />;
    }
  };

  const showNavbar = !["login", "register"].includes(currentPage);

  return (
    <AuthContext.Provider value={ctxValue}>
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
          }
        `}</style>
        {showNavbar && <Navbar />}
        <div style={{ flex: 1 }}>{renderPage()}</div>
        {showNavbar && <Footer />}
      </div>
    </AuthContext.Provider>
  );
}
