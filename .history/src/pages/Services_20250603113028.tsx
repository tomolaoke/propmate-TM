
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, Shield, Zap, Users, Clock, MessageCircle, CreditCard, CheckCircle, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Services = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleStartFreeTrial = () => {
    navigate('/signup');
  };

  const services = [
    {
      icon: Home,
      title: "Property Listing & Management",
      description: "Comprehensive property management solution for landlords and property managers.",
      features: [
        "Add unlimited property listings",
        "Professional photo galleries",
        "Detailed property descriptions",
        "Virtual tour integration",
        "Automated listing updates"
      ],
      pricing: "Free for first 5 properties",
      popular: false
    },
    {
      icon: CreditCard,
      title: "Rent Payment Processing",
      description: "Secure and automated rent collection with multiple payment options.",
      features: [
        "Automated rent collection",
        "Multiple payment methods",
        "Late payment reminders",
        "Payment history tracking",
        "Digital receipts"
      ],
      pricing: "2.5% per transaction",
      popular: true
    },
    {
      icon: MessageCircle,
      title: "Tenant Communication",
      description: "Streamlined communication platform for landlords and tenants.",
      features: [
        "Secure messaging system",
        "Maintenance request portal",
        "Document sharing",
        "Announcement broadcasts",
        "Emergency contact system"
      ],
      pricing: "₦2,000/month per property",
      popular: false
    },
    {
      icon: Shield,
      title: "Tenant Screening",
      description: "Comprehensive background checks and verification services.",
      features: [
        "Credit score verification",
        "Employment verification",
        "Reference checks",
        "ID verification",
        "Criminal background check"
      ],
      pricing: "₦5,000 per screening",
      popular: false
    },
    {
      icon: Clock,
      title: "Maintenance Management",
      description: "Efficient maintenance request and vendor management system.",
      features: [
        "Online maintenance requests",
        "Vendor network access",
        "Work order tracking",
        "Cost estimation tools",
        "Completion notifications"
      ],
      pricing: "₦1,500/month per property",
      popular: false
    },
    {
      icon: Zap,
      title: "Smart Analytics",
      description: "Data-driven insights for better property management decisions.",
      features: [
        "Revenue tracking",
        "Occupancy analytics",
        "Market trend analysis",
        "Performance reports",
        "Predictive insights"
      ],
      pricing: "₦3,000/month",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-gradient-to-r from-green-100 to-orange-100 text-green-800 border-0 px-4 py-2 rounded-full mb-6">
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent"> Property Management</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From property listings to rent collection, tenant screening to maintenance management - 
            we've got you covered with our comprehensive suite of services.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" onClick={handleStartFreeTrial}>
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{service.pricing}</div>
                      <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" onClick={handleGetStarted}>
                        Get Started
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose PropMate Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for the Nigerian market with local expertise and understanding.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Nigerian Focused", desc: "Built for Nigerian property laws and practices" },
              { icon: Zap, title: "Fast Setup", desc: "Get started in less than 10 minutes" },
              { icon: Users, title: "24/7 Support", desc: "Local support team available round the clock" },
              { icon: Star, title: "Proven Results", desc: "Used by 5,000+ property owners across Nigeria" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Property Management?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of property owners who trust PropMate for their management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-50" onClick={handleStartFreeTrial}>
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
