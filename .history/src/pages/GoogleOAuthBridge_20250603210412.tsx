// This page handles the case where the backend returns JSON instead of redirecting
// It parses the JSON, extracts token/role, and redirects to /auth/callback
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleOAuthBridge = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      // Try to parse the body as JSON (works if backend returns JSON)
      const pre = document.querySelector("pre");
      if (pre) {
        const data = JSON.parse(pre.textContent || "{}");
        if (data.token && data.role) {
          window.location.replace(`/auth/callback?token=${encodeURIComponent(data.token)}&role=${encodeURIComponent(data.role)}`);
          return;
        }
      }
      // If not found, fallback to login
      navigate("/login");
    } catch {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-gray-600">Processing Google login...</div>
    </div>
  );
};

export default GoogleOAuthBridge;
