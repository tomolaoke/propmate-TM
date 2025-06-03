import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, CreditCard, Calendar, MessageCircle, Settings, LogOut, Bell, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const TenantDashboard = () => {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const lease_id = "6835edfa996e720d12ea30d0"; // Replace with actual lease_id
  const amount = 560000; // Replace with actual amount

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch(
          `https://pms-bd.onrender.com/api/dashboard/tenant?lease_id=${lease_id}&amount=${amount}`
        );
        const data = await res.json();
        setDashboard(data);
      } catch (err) {
        setDashboard(null);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userType');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const stats = [
    { title: 'Current Rent', value: '₦2.5M', icon: Home, color: 'green' },
    { title: 'Next Payment', value: 'Dec 15', icon: Calendar, color: 'blue' },
    { title: 'Payment Status', value: 'Paid', icon: CreditCard, color: 'green' },
    { title: 'Maintenance', value: '1 Open', icon: Wrench, color: 'orange' }
  ];

  const paymentHistory = [
    { month: 'November 2024', amount: '₦2,500,000', status: 'Paid', date: 'Nov 15, 2024' },
    { month: 'October 2024', amount: '₦2,500,000', status: 'Paid', date: 'Oct 15, 2024' },
    { month: 'September 2024', amount: '₦2,500,000', status: 'Paid', date: 'Sep 15, 2024' },
    { month: 'August 2024', amount: '₦2,500,000', status: 'Paid', date: 'Aug 15, 2024' }
  ];

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
            ) : dashboard ? (
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>API Dashboard Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">{JSON.stringify(dashboard, null, 2)}</pre>
                </CardContent>
              </Card>
            ) : (
              <div className="text-red-500">Failed to load dashboard data.</div>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Current Property */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Current Property</CardTitle>
                <CardDescription>Your rental details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Luxury 3-Bedroom Apartment</h3>
                  <p className="text-gray-600">Victoria Island, Lagos</p>
                  <Badge className="bg-green-100 text-green-800">Active Lease</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Rent:</span>
                    <span className="font-medium">₦2,500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lease Expires:</span>
                    <span className="font-medium">Dec 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Landlord:</span>
                    <span className="font-medium">Mr. Adebayo Johnson</span>
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
                  {paymentHistory.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{payment.month}</p>
                        <p className="text-sm text-gray-600">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{payment.amount}</p>
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
