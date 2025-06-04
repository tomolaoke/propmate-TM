import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, CreditCard, Calendar, MessageCircle, Settings, LogOut, Bell, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

// Types for API response
interface TenantDashboardResponse {
  leases: number;
  pending_invitations: number;
  current_lease: {
    id: string;
    property: {
      title: string;
      address: string;
      type: string;
    };
    monthly_rent: number;
    payment_terms: string;
    end_date: string;
    landlord: {
      id: string;
      name: string;
      email: string;
    };
    status: string;
  } | null;
  payment_status: string;
  next_payment_date: string;
  maintenance_requests: number;
  payment_history: Array<{
    month: string;
    amount: number;
    status: string;
    date: string;
  }>;
}

const TenantDashboard = () => {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState<TenantDashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Session expired. Please log in again.');
        navigate('/login');
        return;
      }
      try {
        const res = await fetch(
          `https://pms-bd.onrender.com/api/dashboard/tenant`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (res.status === 401) {
          alert('Session expired. Please log in again.');
          navigate('/login');
          return;
        }
        if (!res.ok) throw new Error('Failed to fetch dashboard data.');
        const data: TenantDashboardResponse = await res.json();
        setDashboard(data);
      } catch (err: any) {
        setDashboard(null);
        setError(err.message || 'Failed to load dashboard data.');
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userType');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tenant Dashboard</h1>
              <p className="text-gray-600">Manage your rental property and payments.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="destructive" size="icon" onClick={handleLogout}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Dashboard Data */}
          <div className="mb-8">
            {loading ? (
              <div>Loading dashboard data...</div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : dashboard ? (
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Lease Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                    <span className="font-semibold">Total Leases:</span> {dashboard.leases}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Pending Invitations:</span> {dashboard.pending_invitations}
                  </div>
                  {dashboard.current_lease && (
                    <div className="mb-2">
                      <span className="font-semibold">Current Lease:</span> {dashboard.current_lease.property.title} ({dashboard.current_lease.property.address})<br />
                      <span className="font-semibold">Monthly Rent:</span> ₦{dashboard.current_lease.monthly_rent.toLocaleString()}<br />
                      <span className="font-semibold">Payment Terms:</span> {dashboard.current_lease.payment_terms}<br />
                      <span className="font-semibold">Lease Ends:</span> {dashboard.current_lease.end_date}<br />
                      <span className="font-semibold">Landlord:</span> {dashboard.current_lease.landlord.name} ({dashboard.current_lease.landlord.email})<br />
                      <span className="font-semibold">Status:</span> <Badge>{dashboard.current_lease.status}</Badge>
                    </div>
                  )}
                  <div className="mb-2">
                    <span className="font-semibold">Payment Status:</span> <Badge>{dashboard.payment_status}</Badge>
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Next Payment Date:</span> {dashboard.next_payment_date}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Open Maintenance Requests:</span> {dashboard.maintenance_requests}
                  </div>
                </CardContent>
              </Card>
            ) : null}
          </div>

          {/* Stats Grid */}
          {!loading && dashboard && (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Current Rent</p>
                      <p className="text-2xl font-bold text-gray-900">₦{dashboard.current_lease?.monthly_rent ? dashboard.current_lease.monthly_rent.toLocaleString() : '-'}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Home className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Next Payment</p>
                      <p className="text-2xl font-bold text-gray-900">{dashboard.next_payment_date || '-'}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Payment Status</p>
                      <p className="text-2xl font-bold text-gray-900">{dashboard.payment_status}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Maintenance</p>
                      <p className="text-2xl font-bold text-gray-900">{dashboard.maintenance_requests}</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Current Property & Quick Actions */}
          {!loading && dashboard && dashboard.current_lease && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Current Property */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Current Property</CardTitle>
                  <CardDescription>Your rental details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">{dashboard.current_lease.property.title}</h3>
                    <p className="text-gray-600">{dashboard.current_lease.property.address}</p>
                    <Badge className="bg-green-100 text-green-800">{dashboard.current_lease.status}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Rent:</span>
                      <span className="font-medium">₦{dashboard.current_lease.monthly_rent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lease Expires:</span>
                      <span className="font-medium">{dashboard.current_lease.end_date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Landlord:</span>
                      <span className="font-medium">{dashboard.current_lease.landlord.name}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Landlord
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Manage your tenancy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start bg-gradient-to-r from-green-600 to-green-700">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay Rent
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Wrench className="w-4 h-4 mr-2" />
                    Request Maintenance
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Inspection
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Payment History */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>Your recent payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dashboard.payment_history && dashboard.payment_history.length > 0 ? (
                      dashboard.payment_history.map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{payment.month}</p>
                            <p className="text-sm text-gray-600">{payment.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">₦{payment.amount.toLocaleString()}</p>
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              {payment.status}
                            </Badge>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500">No payment history available.</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
