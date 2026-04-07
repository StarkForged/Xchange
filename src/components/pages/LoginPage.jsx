import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../constants/colors";
import { InputField } from "../form/InputField";
import { PrimaryButton } from "../form/PrimaryButton";

// Login page collects credentials and submits them through auth context.
export function LoginPage() {
  const { login, setCurrentPage, authError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    login({ email, password });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: COLORS.surface,
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          background: COLORS.surfaceContainerLowest,
          borderRadius: "28px",
          padding: "48px 40px",
          boxShadow: "0 12px 32px rgba(44,47,48,0.06)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 900,
              color: COLORS.primary,
              fontFamily: "Manrope, sans-serif",
              marginBottom: "8px",
            }}
          >
            Xchange
          </div>
          <p style={{ fontSize: "15px", color: COLORS.onSurfaceVariant }}>
            Welcome back. Sign in to continue.
          </p>
        </div>
        {authError && (
          <div
            style={{
              padding: "10px 16px",
              background: "rgba(179,27,37,0.06)",
              borderRadius: "10px",
              color: COLORS.error,
              fontSize: "13px",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            {authError}
          </div>
        )}
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          icon="mail"
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          icon="lock"
        />
        <div
          style={{
            textAlign: "right",
            marginBottom: "20px",
          }}
        >
          <a
            href="#"
            style={{
              fontSize: "13px",
              color: COLORS.primary,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Forgot password?
          </a>
        </div>
        <PrimaryButton
          onClick={handleSubmit}
          style={{ width: "100%", padding: "14px", fontSize: "15px" }}
        >
          Sign In
        </PrimaryButton>
        <p
          style={{
            textAlign: "center",
            marginTop: "24px",
            fontSize: "14px",
            color: COLORS.onSurfaceVariant,
          }}
        >
          Don't have an account?{" "}
          <a
            onClick={() => setCurrentPage("register")}
            style={{
              color: COLORS.primary,
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
