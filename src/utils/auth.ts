// Token expiration time in milliseconds (e.g., 24 hours)
const TOKEN_EXPIRY = 24 * 60 * 60 * 1000;

export const isTokenExpired = (): boolean => {
  const loginTime = localStorage.getItem('loginTime');
  if (!loginTime) return true;

  const loginDate = new Date(loginTime).getTime();
  const now = new Date().getTime();
  return now - loginDate > TOKEN_EXPIRY;
};

export const clearAuthData = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userType');
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('loginTime');
};

export const checkAndHandleTokenExpiration = (navigate: (path: string) => void) => {
  if (isTokenExpired()) {
    clearAuthData();
    navigate('/login');
    return true;
  }
  return false;
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return !!(token && isLoggedIn === 'true' && !isTokenExpired());
};
