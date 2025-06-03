import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const role = params.get("role");
    const error = params.get("error");

    if (error) {
      setError(error);
      setTimeout(() => navigate("/login"), 3000);
      return;
    }

    if (token && role) {
      try {
        localStorage.setItem("token", token);
        localStorage.setItem("userType", role);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loginTime", new Date().toISOString());

        if (role === "landlord") {
          navigate("/dashboard/landlord");
        } else if (role === "tenant") {
          navigate("/dashboard/tenant");
        } else {
          navigate("/");
        }
      } catch (err) {
        setError("Failed to save authentication data");
        setTimeout(() => navigate("/login"), 3000);
      }
    } else {
      setError("Authentication failed: Missing token or role");
      setTimeout(() => navigate("/login"), 3000);
    }
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex flex-col items-center justify-center p-4">
        <div className="text-red-500 text-center mb-4">
          <p className="text-lg font-semibold">Authentication Error</p>
          <p>{error}</p>
          <p className="text-sm text-gray-500 mt-2">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex flex-col items-center justify-center p-4">
      <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-600">Signing you in...</p>
    </div>
  );
};

export default AuthCallback;
