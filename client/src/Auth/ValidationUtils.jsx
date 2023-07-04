export const validateSignupForm = (username, password, confirmPassword) => {
  const errors = [];

  if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
    errors.push('All fields are required');
  }

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }

  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/(?=.*\d)/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/(?=.*[@#$%^&+=])/.test(password)) {
    errors.push('Password must contain at least one special character (@#$%^&+=)');
  }

  if (password !== confirmPassword) {
    errors.push('Passwords do not match');
  }

  return errors;
};

export const validateLoginForm = (username, password) => {
  const errors = [];

  if (!username.trim() || !password.trim()) {
    errors.push('All fields are required');
  }

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }

  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/(?=.*\d)/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/(?=.*[@#$%^&+=])/.test(password)) {
    errors.push('Password must contain at least one special character (@#$%^&+=)');
  }

  return errors;
};