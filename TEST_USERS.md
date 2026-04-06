# Test User Credentials

## Dummy Users for Testing Authentication

### Buyer Account
- **Email:** `buyer@example.com`
- **Password:** `password123`
- **Role:** Buyer
- **Trust Score:** 85/100

### Seller Account
- **Email:** `seller@example.com`
- **Password:** `password123`
- **Role:** Seller
- **Trust Score:** 92/100

### Admin Account
- **Email:** `admin@example.com`
- **Password:** `admin123`
- **Role:** Admin
- **Trust Score:** 100/100

---

## Authentication Validation Rules

The authentication system now validates:

### Login Validation
- ✅ Email format validation (must be valid email format)
- ✅ Password required (non-empty)
- ✅ Credentials checked against dummy users
- ✅ Error messages for invalid email format or failed authentication
- ✅ Auto-routing based on user role

### Registration Validation
- ✅ All fields required (name, email, password)
- ✅ Email format validation
- ✅ Password strength check (minimum 6 characters)
- ✅ Password confirmation match
- ✅ Duplicate email prevention
- ✅ User creation and role assignment
- ✅ Auto-routing to appropriate dashboard

### Error Messages
- "Email and password are required"
- "Invalid email format"
- "Invalid email or password"
- "All fields are required"
- "Invalid email format"
- "Password must be at least 6 characters"
- "Passwords do not match"
- "Email already registered"

---

## Testing Checklist

### Login Flow
- [ ] Test with valid buyer credentials
- [ ] Test with valid seller credentials
- [ ] Test with valid admin credentials
- [ ] Test with invalid email format
- [ ] Test with empty email
- [ ] Test with empty password
- [ ] Test with non-existent email
- [ ] Test with incorrect password
- [ ] Verify correct dashboard loads after login
- [ ] Test logout functionality

### Registration Flow
- [ ] Test with all valid fields
- [ ] Test with missing name field
- [ ] Test with invalid email format
- [ ] Test with weak password (<6 chars)
- [ ] Test with mismatched passwords
- [ ] Test with duplicate email
- [ ] Verify user creation with different roles
- [ ] Verify correct dashboard loads after registration

### General Auth Tests
- [ ] Test navigation with logged-in user
- [ ] Test protected pages without login
- [ ] Test user state persistence
- [ ] Test logout clears user state

---

## Implementation Details

- **Location:** `src/context/AuthContext.jsx`
- **Authentication Logic:** `src/App.jsx`
- **Page Components:** 
  - [src/components/pages/LoginPage.jsx](src/components/pages/LoginPage.jsx)
  - [src/components/pages/RegisterPage.jsx](src/components/pages/RegisterPage.jsx)

Validation functions exported from `AuthContext`:
- `authenticateUser(email, password)` - Validates credentials against dummy users
- `registerUser(name, email, password, confirmPassword, role)` - Validates and creates new user
- `isValidEmail(email)` - Email format validation
- `isValidPassword(password)` - Password strength validation
