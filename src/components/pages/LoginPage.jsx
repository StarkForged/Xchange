import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../constants/colors";
import { InputField } from "../form/InputField";
import { PrimaryButton } from "../form/PrimaryButton";
import { ErrorMessage } from "../common/ErrorMessage";
import { useLoginForm } from "../../hooks/useLoginForm";

// LoginPage — UI-only; all form state and validation lives in useLoginForm.
export function LoginPage() {
  const { login, authError, setAuthError } = useAuth();
  const { email, setEmail, password, setPassword, errors, handleBlur, handleSubmit } =
    useLoginForm(login);

  // Clear the server-side auth error when the user starts typing again
  const clearServerError = () => {
    if (authError) setAuthError("");
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

        <ErrorMessage message={authError} />

        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); clearServerError(); }}
          onBlur={() => handleBlur("email")}
          placeholder="you@example.com"
          icon="mail"
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); clearServerError(); }}
          onBlur={() => handleBlur("password")}
          placeholder="Enter your password"
          icon="lock"
          error={errors.password}
        />

        <div style={{ textAlign: "right", marginBottom: "20px" }}>
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
          <Link
            to="/register"
            style={{
              color: COLORS.primary,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
