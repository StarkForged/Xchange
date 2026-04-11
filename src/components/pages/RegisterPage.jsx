import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../constants/colors";
import { InputField } from "../form/InputField";
import { SelectField } from "../form/SelectField";
import { PrimaryButton } from "../form/PrimaryButton";
import { ErrorMessage } from "../common/ErrorMessage";
import { useRegisterForm } from "../../hooks/useRegisterForm";

// RegisterPage — UI-only; all form state and validation lives in useRegisterForm.
export function RegisterPage() {
  const { register, authError, setAuthError } = useAuth();
  const { form, update, errors, handleBlur, handleSubmit } =
    useRegisterForm(register);

  const clearServerError = () => {
    if (authError) setAuthError("");
  };

  const handleChange = (field) => (e) => {
    update(field)(e);
    clearServerError();
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
          maxWidth: "480px",
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
            Join Xchange
          </div>
          <p style={{ fontSize: "15px", color: COLORS.onSurfaceVariant }}>
            Create your account to start trading.
          </p>
        </div>

        <ErrorMessage message={authError} />

        <InputField
          label="Full Name"
          value={form.name}
          onChange={handleChange("name")}
          onBlur={() => handleBlur("name")}
          placeholder="John Doe"
          icon="person"
          error={errors.name}
        />
        <InputField
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange("email")}
          onBlur={() => handleBlur("email")}
          placeholder="you@example.com"
          icon="mail"
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          value={form.password}
          onChange={handleChange("password")}
          onBlur={() => handleBlur("password")}
          placeholder="Create a strong password"
          icon="lock"
          error={errors.password}
        />
        <InputField
          label="Confirm Password"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange("confirmPassword")}
          onBlur={() => handleBlur("confirmPassword")}
          placeholder="Re-enter your password"
          icon="lock"
          error={errors.confirmPassword}
        />
        <SelectField
          label="I want to"
          value={form.role}
          onChange={update("role")}
          options={[
            { value: "buyer", label: "Buy items" },
            { value: "seller", label: "Sell items" },
          ]}
        />

        <PrimaryButton
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "15px",
            marginTop: "8px",
          }}
        >
          Create Account
        </PrimaryButton>

        <p
          style={{
            textAlign: "center",
            marginTop: "24px",
            fontSize: "14px",
            color: COLORS.onSurfaceVariant,
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: COLORS.primary,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
