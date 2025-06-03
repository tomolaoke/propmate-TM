import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Get email from navigation state or fallback to empty string
  const email = location.state?.email || "";
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://pms-bd.onrender.com/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: Number(otp) }),
      });
      if (res.ok) {
        alert("Email verified! You can now log in.");
        navigate("/login");
      } else {
        const err = await res.json();
        alert(err.message || "Verification failed.");
      }
    } catch {
      alert("Network error.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResending(true);
    try {
      const res = await fetch("https://pms-bd.onrender.com/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        alert("A new OTP has been sent to your email.");
      } else {
        const err = await res.json();
        alert(err.message || "Failed to resend OTP.");
      }
    } catch {
      alert("Network error.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-orange-50 px-4 py-8">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded shadow max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">Verify Your Email</h2>
        <p className="text-gray-600 mb-4">Enter the OTP sent to <b>{email}</b></p>
        <input type="hidden" name="email" value={email} />
        <Input
          type="text"
          name="otp"
          placeholder="Enter OTP"
          value={otp}
          onChange={e => setOtp(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Verifying..." : "Verify Email"}
        </Button>
        <div className="mt-2 text-center">
          <Button
            type="button"
            variant="link"
            onClick={handleResendOtp}
            disabled={resending}
          >
            {resending ? "Resending..." : "Resend OTP"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VerifyEmail;
