import { useState } from "react";

// usePostAdForm encapsulates post-ad state, per-field validation, and submission.
export function usePostAdForm(onSubmit) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    location: "",
    condition: "new",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function validateField(field, value) {
    if (field === "title") {
      if (!value.trim()) return "Title is required";
      if (value.trim().length < 5) return "Title must be at least 5 characters";
    }
    if (field === "price") {
      if (!value.trim()) return "Price is required";
      const num = parseFloat(value);
      if (isNaN(num) || num < 0) return "Enter a valid price";
    }
    if (field === "category") {
      if (!value) return "Please select a category";
    }
    return "";
  }

  function update(field) {
    return (e) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      if (touched[field]) {
        setErrors((err) => ({ ...err, [field]: validateField(field, value) }));
      }
    };
  }

  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: validateField(field, form[field]) }));
  }

  function handleSubmit() {
    const required = ["title", "price", "category"];
    const newErrors = {};
    required.forEach((f) => {
      newErrors[f] = validateField(f, form[f]);
    });
    setTouched({ title: true, price: true, category: true });
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;
    onSubmit(form);
  }

  return { form, update, errors, touched, handleBlur, handleSubmit };
}
