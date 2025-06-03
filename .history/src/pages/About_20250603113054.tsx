import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, Users, Target, Award, MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  const team = [
    {
      name: "Tomola Oke",
      role: "Backend Developer",
      bio: "Expert backend developer with extensive experience in API development and system architecture",
      avatar: "👨🏿‍💼"
    },
    {
      name: "Patience Okorie",
      role: "Head of Product", 
      bio: "Product leader passionate about solving Nigerian housing challenges",
      avatar: "👩🏿‍💻"
    },
    {
      name: "Anthony Eze",
      role: "Frontend Developer",
      bio: "Creative frontend developer focused on user experience and modern web technologies",
      avatar: "👨🏿‍🎨"
    },
    {
      name: "Peter Oyelegbin",
      role: "Cloud and DevOps",
      bio: "DevOps expert ensuring scalable infrastructure and seamless service delivery",
      avatar: "👩🏿‍💼"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Transparency",
      description: "We believe in clear, honest communication in all property transactions."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building stronger communities through better property management."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality service to our users."
    },
    {
      icon: Home,
      title: "Innovation",
      description: "Constantly improving our platform with cutting-edge technology."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-green-100 to-orange-100 text-green-800 border-0 px-4 py-2 rounded-full">
                About PropMate
              </Badge>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Revolutionizing Property Management in
                  <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent"> Nigeria</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Founded in 2023, PropMate emerged from a simple observation: property management in Nigeria 
                  was stuck in the past. Endless paperwork, missed payments, and poor communication were the norm.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We set out to change that by building the first truly Nigerian property management platform 
                  that understands our unique market needs, regulations, and culture.
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                onClick={() => window.open('https://wa.me/qr/EC7TZ3AYBCCUM1', '_blank')}
              >
                Join Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">10,000+</div>
                      <div className="text-gray-600">Properties Managed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">5,000+</div>
                      <div className="text-gray-600">Happy Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">₦50M+</div>
                      <div className="text-gray-600">Rent Processed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">25+</div>
                      <div className="text-gray-600">Cities Covered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize property management in Nigeria by providing accessible, 
                  affordable, and efficient digital tools that empower both property owners 
                  and tenants to have better experiences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become Africa's leading property technology platform, setting the 
                  standard for transparent, efficient, and user-friendly property management 
                  across the continent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our community.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to transforming property management in Nigeria.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-green-600 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Want to Learn More?</h2>
          <p className="text-xl text-green-100 mb-8">
            We'd love to hear from you and answer any questions about PropMate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-50">
              <Mail className="mr-2 w-5 h-5" />
              hello@propmate.ng
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600"
              onClick={() => window.open('tel:+2348039093482', '_self')}
            >
              <Phone className="mr-2 w-5 h-5" />
              +234 803 909 3482
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
