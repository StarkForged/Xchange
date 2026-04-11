import { useState } from "react";
import { isValidEmail } from "../context/AuthContext";

// useLoginForm encapsulates login form state, per-field validation, and submission.
export function useLoginForm(login) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function validateField(name, value) {
    if (name === "email") {
      if (!value.trim()) return "Email is required";
      if (!isValidEmail(value.trim())) return "Enter a valid email address";
    }
    if (name === "password") {
      if (!value) return "Password is required";
      if (value.length < 6) return "Password must be at least 6 characters";
    }
    return "";
  }

  function handleBlur(name) {
    const value = name === "email" ? email : password;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((e) => ({ ...e, [name]: validateField(name, value) }));
  }

  function handleSubmit() {
    const emailErr = validateField("email", email);
    const passwordErr = validateField("password", password);
    setTouched({ email: true, password: true });
    setErrors({ email: emailErr, password: passwordErr });
    if (emailErr || passwordErr) return;
    login({ email: email.trim().toLowerCase(), password });
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    touched,
    handleBlur,
    handleSubmit,
  };
}
