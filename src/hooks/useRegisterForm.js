import { useState } from "react";
import { isValidEmail, isValidPassword } from "../context/AuthContext";

// useRegisterForm encapsulates registration state, per-field validation, and submission.
export function useRegisterForm(register) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function validateField(field, value, allForm) {
    const f = allForm ?? form;
    if (field === "name") {
      if (!value.trim()) return "Full name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
    }
    if (field === "email") {
      if (!value.trim()) return "Email is required";
      if (!isValidEmail(value.trim())) return "Enter a valid email address";
    }
    if (field === "password") {
      if (!value) return "Password is required";
      if (!isValidPassword(value)) return "Password must be at least 6 characters";
    }
    if (field === "confirmPassword") {
      if (!value) return "Please confirm your password";
      if (value !== f.password) return "Passwords do not match";
    }
    return "";
  }

  function update(field) {
    return (e) => {
      const value = e.target.value;
      setForm((prev) => {
        const next = { ...prev, [field]: value };
        if (touched[field]) {
          setErrors((err) => ({
            ...err,
            [field]: validateField(field, value, next),
          }));
        }
        return next;
      });
    };
  }

  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: validateField(field, form[field]) }));
  }

  function handleSubmit() {
    const fields = ["name", "email", "password", "confirmPassword"];
    const newErrors = {};
    fields.forEach((f) => {
      newErrors[f] = validateField(f, form[f]);
    });
    setTouched({ name: true, email: true, password: true, confirmPassword: true });
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;
    register(form);
  }

  return {
    form,
    update,
    errors,
    touched,
    handleBlur,
    handleSubmit,
  };
}
