import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, Shield, Zap, Users, Star, Check, CreditCard, Clock, MessageCircle, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-green-100 to-orange-100 text-green-800 border-0 px-4 py-2 rounded-full">
                  🏠 Nigeria's #1 Property Platform
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-green-600 via-green-700 to-orange-600 bg-clip-text text-transparent">
                    Manage, Rent & Discover
                  </span>
                  <br />
                  <span className="text-gray-900">Properties</span>
                  <br />
                  <span className="text-lg font-normal text-gray-600">The Smart, Paperless Way</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  PropMate connects landlords, tenants, and buyers on a single digital platform. 
                  Experience seamless property management with Nigerian-focused solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-full text-lg font-semibold"
                  onClick={() => setIsModalOpen(true)}
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 from 2000+ users</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Property Dashboard</h3>
                    <Badge className="bg-green-100 text-green-800 border-0">Live</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-800">247</div>
                      <div className="text-sm text-green-600">Properties Listed</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-orange-800">₦2.5M</div>
                      <div className="text-sm text-orange-600">Revenue This Month</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Home className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Victoria Island Apartment</div>
                          <div className="text-sm text-gray-500">Rent due in 3 days</div>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800 border-0">Pending</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for YouTube Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/CSxQa6r3gA0?autoplay=1"
                title="YouTube Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-green-100 to-orange-100 text-green-800 border-0 px-4 py-2 rounded-full">
              How It Works
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">Simple. Fast. Effective.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and transform your property management experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Sign Up", desc: "Create your account in under 2 minutes", step: "01" },
              { icon: Home, title: "List Properties", desc: "Add your properties with our smart tools", step: "02" },
              { icon: Zap, title: "Manage Online", desc: "Handle everything from one dashboard", step: "03" },
              { icon: CreditCard, title: "Secure Payments", desc: "Process rent payments seamlessly", step: "04" }
            ].map((item, index) => (
              <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="pt-6 space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                      <item.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-green-100 to-orange-100 text-green-800 border-0 px-4 py-2 rounded-full">
              Why Choose PropMate?
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">Built for Nigeria, Made for Success</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Paperless",
                desc: "Go completely digital with secure document management",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: CreditCard,
                title: "Secure Payments",
                desc: "Process payments with bank-grade security",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Zap,
                title: "AI-Powered",
                desc: "Smart recommendations and automated workflows",
                gradient: "from-orange-500 to-orange-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-green-100 to-orange-100 text-green-800 border-0 px-4 py-2 rounded-full">
              Our Services
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">Everything You Need in One Platform</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Property Listing & Management",
                desc: "List, edit, and manage property details all in one place with smart automation.",
                color: "green"
              },
              {
                icon: Clock,
                title: "Rent Payment Tracking",
                desc: "Track due payments and get notified instantly with automated reminders.",
                color: "blue"
              },
              {
                icon: MessageCircle,
                title: "Secure Messaging",
                desc: "Communicate safely with tenants, landlords, or agents through encrypted channels.",
                color: "orange"
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className={`w-20 h-20 bg-gradient-to-br from-${service.color}-100 to-${service.color}-200 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-10 h-10 text-${service.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                List your property for FREE this month!
              </h2>
              <p className="text-xl text-green-100">
                Limited offer for early birds. Join thousands of property owners already using PropMate.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <div className="flex justify-center items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10,000+</div>
                <div className="text-green-100">Properties Listed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5,000+</div>
                <div className="text-green-100">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">₦50M+</div>
                <div className="text-green-100">Transactions Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-green-100 to-orange-100 text-green-800 border-0 px-4 py-2 rounded-full">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">Our Happy Clients</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                quote: "PropMate has completely transformed how I manage my properties. No more paperwork or chasing tenants for documents; everything is neatly organized and accessible. It feels like I hired a digital assistant!",
                name: "Mr. Tunde A.",
                role: "Landlord, Abuja",
                avatar: "🏢"
              },
              {
                quote: "Finding and renting an apartment has never been this easy! I signed my lease online, got all the details I needed, and even tracked my rent payments through PropMate. Smooth experience from start to finish.",
                name: "Blessing Eke",
                role: "Tenant, Uyo",
                avatar: "🏠"
              },
              {
                quote: "PropMate has completely transformed the way I manage multiple properties. I no longer juggle paperwork or endless calls — everything from tenant onboarding to rent tracking is streamlined and stress-free.",
                name: "Mrs. Chidimma Okeke",
                role: "Property Manager, Lagos",
                avatar: "🏘️"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-orange-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">PropMate</span>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                PropMate; Where property meets convenience, without the paperwork.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Youtube className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services" className="hover:text-white transition-colors">Property Listing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Rent Management</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Tenant Screening</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Payment Processing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sign Up</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 hello@propmate.ng</li>
                <li>📞 +234 (0) 812 345 6789</li>
                <li>📍 Victoria Island, Lagos</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">
              © 2024 PropMate. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400">Connect with us</span>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  📘
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  📷
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  🐦
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;