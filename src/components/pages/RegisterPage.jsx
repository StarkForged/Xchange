import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../constants/colors";
import { InputField } from "../form/InputField";
import { SelectField } from "../form/SelectField";
import { PrimaryButton } from "../form/PrimaryButton";

export function RegisterPage() {
  const { register, setCurrentPage, authError } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
  });

  const update = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = () => {
    register(form);
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
          label="Full Name"
          value={form.name}
          onChange={update("name")}
          placeholder="John Doe"
          icon="person"
        />
        <InputField
          label="Email"
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="you@example.com"
          icon="mail"
        />
        <InputField
          label="Password"
          type="password"
          value={form.password}
          onChange={update("password")}
          placeholder="Create a strong password"
          icon="lock"
        />
        <InputField
          label="Confirm Password"
          type="password"
          value={form.confirmPassword}
          onChange={update("confirmPassword")}
          placeholder="Re-enter your password"
          icon="lock"
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
          <a
            onClick={() => setCurrentPage("login")}
            style={{
              color: COLORS.primary,
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
