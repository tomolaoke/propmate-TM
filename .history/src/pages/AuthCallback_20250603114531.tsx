import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const role = params.get("role");

    if (token && role) {
      localStorage.setItem("token", token);
      localStorage.setItem("userType", role);
      localStorage.setItem("isLoggedIn", "true");
      if (role === "landlord") {
        navigate("/dashboard/landlord");
      } else if (role === "tenant") {
        navigate("/dashboard/tenant");
      } else {
        navigate("/");
      }
    } else {
      alert("Google authentication failed.");
      navigate("/login");
    }
  }, [navigate]);

  return <div>Signing you in...</div>;
};

export default AuthCallback;
