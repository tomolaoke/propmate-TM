import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FAQ from "./pages/FAQ";
import LandlordDashboard from "./pages/Dashboard/LandlordDashboard";
import TenantDashboard from "./pages/Dashboard/TenantDashboard";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";
import VerifyEmail from "./pages/VerifyEmail";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect } from "react";
import { checkAndHandleTokenExpiration } from "./utils/auth";
import { useNavigate } from "react-router-dom";

const queryClient = new QueryClient();

const AppContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check token expiration every minute
    const tokenCheck = setInterval(() => {
      checkAndHandleTokenExpiration(navigate);
    }, 60000);

    return () => clearInterval(tokenCheck);
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        
        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/landlord" element={
            <PrivateRoute>
              <LandlordDashboard />
            </PrivateRoute>
          } />
          <Route path="/dashboard/tenant" element={
            <PrivateRoute>
              <TenantDashboard />
            </PrivateRoute>
          } />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Chatbot />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
