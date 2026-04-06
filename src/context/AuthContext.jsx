import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

// Dummy users for testing - stored as username:password combinations
export const DUMMY_USERS = [
  {
    name: "John Buyer",
    email: "buyer@example.com",
    password: "password123",
    role: "buyer",
    trustScore: 85,
  },
  {
    name: "Sarah Seller",
    email: "seller@example.com",
    password: "password123",
    role: "seller",
    trustScore: 92,
  },
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
    trustScore: 100,
  },
];

// Validate email format
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate password strength
export function isValidPassword(password) {
  return password && password.length >= 6;
}

// Authenticate user against dummy users
export function authenticateUser(email, password) {
  const user = DUMMY_USERS.find(
    (u) => u.email === email && u.password === password
  );
  if (user) {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
}

// Register new user (for now, just validates and returns user)
export function registerUser(name, email, password, confirmPassword, role) {
  if (!name || !email || !password) {
    return { error: "All fields are required" };
  }
  if (!isValidEmail(email)) {
    return { error: "Invalid email format" };
  }
  if (!isValidPassword(password)) {
    return { error: "Password must be at least 6 characters" };
  }
  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }
  if (DUMMY_USERS.some((u) => u.email === email)) {
    return { error: "Email already registered" };
  }
  // Return new user object (in real app, would save to database)
  return {
    user: {
      name,
      email,
      role: role || "buyer",
      trustScore: 50,
    },
  };
}

export function useAuth() {
  return useContext(AuthContext);
}
