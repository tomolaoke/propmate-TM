import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const role = params.get("role");

    if (token && role && ['tenant', 'landlord'].includes(role)) {
      localStorage.setItem("token", token);

      // Fetch the appropriate dashboard API
      const fetchDashboard = async () => {
        try {
          const response = await fetch(`https://pms-bd.onrender.com/api/dashboard/${role}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch ${role} dashboard: ${response.statusText}`);
          }

          // Dashboard API call successful, navigate to frontend dashboard
          navigate(`/dashboard/${role}`);
        } catch (err) {
          console.error('Dashboard fetch error:', err);
          setError('Failed to load dashboard. Please try again.');
          navigate('/login');
        }
      };

      fetchDashboard();
    } else {
      setError("Google authentication failed.");
      navigate("/login");
    }
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-gray-600">Signing you in...</div>
    </div>
  );
};

export default AuthCallback;