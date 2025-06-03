import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, DollarSign, Users, Calendar, Plus, Settings, LogOut, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const LandlordDashboard = () => {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const lease_id = "6835edfa996e720d12ea30d0"; // Replace with actual lease_id
  const amount = 560000; // Replace with actual amount

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
          `https://pms-bd.onrender.com/api/dashboard/landlord?lease_id=${lease_id}&amount=${amount}`,
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
        const data = await res.json();
        setDashboard(data);
      } catch (err) {
        setDashboard(null);
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

  const stats = [
    { title: 'Total Properties', value: '12', icon: Home, color: 'green' },
    { title: 'Monthly Revenue', value: '₦4.2M', icon: DollarSign, color: 'blue' },
    { title: 'Active Tenants', value: '28', icon: Users, color: 'orange' },
    { title: 'Pending Payments', value: '3', icon: Calendar, color: 'red' }
  ];

  const recentActivities = [
    { action: 'New rent payment', property: 'Victoria Island Apartment', time: '2 hours ago', status: 'success' },
    { action: 'Maintenance request', property: 'Lekki Duplex', time: '4 hours ago', status: 'pending' },
    { action: 'New tenant inquiry', property: 'Ikeja GRA Flat', time: '6 hours ago', status: 'info' },
    { action: 'Lease renewal', property: 'Ajah Terraced House', time: '1 day ago', status: 'success' }
  ];

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
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your properties efficiently</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start bg-gradient-to-r from-green-600 to-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Property
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Tenants
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  View Payments
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Inspection
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="lg:col-span-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest updates from your properties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.property}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          className={
                            activity.status === 'success' ? 'bg-green-100 text-green-800' :
                            activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }
                        >
                          {activity.status}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
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

export default LandlordDashboard;
