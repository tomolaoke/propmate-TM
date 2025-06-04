import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, DollarSign, Users, Calendar, Plus, Settings, LogOut, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

// Types for API response
interface LandlordDashboardResponse {
  landlord: {
    id: string;
    name: string;
    email: string;
  };
  properties: number;
  leases: number;
  pending_invitations: number;
  active_leases: Array<{
    id: string;
    property: {
      title: string;
      address: string;
    };
    tenant: {
      name: string;
      email: string;
    };
    rent_amount: number;
    status: string;
  }>;
  total_revenue: number;
  maintenance_requests: Array<{
    id: string;
    property_title: string;
    description: string;
    status: string;
  }>;
  properties_list: Array<{
    id: string;
    title: string;
    address: string;
    status: string;
  }>;
}

const LandlordDashboard = () => {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState<LandlordDashboardResponse | null>(null);
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
          `https://pms-bd.onrender.com/api/dashboard/landlord`,
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
        const data: LandlordDashboardResponse = await res.json();
        setDashboard(data);
      } catch (err: unknown) {
        setDashboard(null);
        setError(err instanceof Error ? err.message : 'Failed to load dashboard data.');
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
              <h1 className="text-3xl font-bold text-gray-900">Landlord Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with your properties.</p>
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
                  <CardTitle>Landlord Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                    <span className="font-semibold">Name:</span> {dashboard.landlord.name}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Email:</span> {dashboard.landlord.email}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Total Properties:</span> {dashboard.properties}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Total Leases:</span> {dashboard.leases}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Pending Invitations:</span> {dashboard.pending_invitations}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Total Revenue:</span> ₦{dashboard.total_revenue.toLocaleString()}
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
                      <p className="text-sm text-gray-600 mb-1">Total Properties</p>
                      <p className="text-2xl font-bold text-gray-900">{dashboard.properties}</p>
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
                      <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">₦{dashboard.total_revenue.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Active Leases</p>
                      <p className="text-2xl font-bold text-gray-900">{dashboard.leases}</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Pending Invitations</p>
                      <p className="text-2xl font-bold text-gray-900">{dashboard.pending_invitations}</p>
                    </div>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Active Leases & Maintenance Requests */}
          {!loading && dashboard && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Active Leases */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Active Leases</CardTitle>
                  <CardDescription>Current tenants and properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dashboard.active_leases && dashboard.active_leases.length > 0 ? (
                      dashboard.active_leases.map((lease) => (
                        <div key={lease.id} className="p-3 bg-gray-50 rounded-lg mb-2">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-gray-900">{lease.property.title}</p>
                              <p className="text-sm text-gray-600">{lease.property.address}</p>
                              <p className="text-sm text-gray-600">Tenant: {lease.tenant.name} ({lease.tenant.email})</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">₦{lease.rent_amount.toLocaleString()}</p>
                              <Badge className="bg-green-100 text-green-800 text-xs">{lease.status}</Badge>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500">No active leases available.</div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Maintenance Requests */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Maintenance Requests</CardTitle>
                  <CardDescription>Open and pending requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dashboard.maintenance_requests && dashboard.maintenance_requests.length > 0 ? (
                      dashboard.maintenance_requests.map((req) => (
                        <div key={req.id} className="p-3 bg-gray-50 rounded-lg mb-2">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-gray-900">{req.property_title}</p>
                              <p className="text-sm text-gray-600">{req.description}</p>
                            </div>
                            <div className="text-right">
                              <Badge className={req.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}>{req.status}</Badge>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500">No maintenance requests available.</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Properties List */}
          {!loading && dashboard && (
            <div className="mt-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Properties List</CardTitle>
                  <CardDescription>All your properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dashboard.properties_list && dashboard.properties_list.length > 0 ? (
                      dashboard.properties_list.map((property) => (
                        <div key={property.id} className="p-3 bg-gray-50 rounded-lg mb-2">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-gray-900">{property.title}</p>
                              <p className="text-sm text-gray-600">{property.address}</p>
                            </div>
                            <div className="text-right">
                              <Badge className={property.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>{property.status}</Badge>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500">No properties available.</div>
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

export default LandlordDashboard;
