import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Bed, Bath, Square, Heart, Phone, User, Filter, Search, Grid, List } from "lucide-react";
import Navbar from "@/components/Navbar";

const Properties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    priceRange: '',
    status: ''
  });

  const handleContactLandlord = (phone: string, name: string) => {
    const message = `Hello ${name}, I'm interested in your property listed on PropMate. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const properties = [
    {
      id: 1,
      title: "Luxury 3-Bedroom Apartment",
      location: "Victoria Island, Lagos",
      price: "₦2,500,000",
      period: "per annum",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: "120 sqm",
      status: "New",
      agent: "Direct Landlord",
      landlord: {
        name: "Mr. Adebayo Johnson",
        avatar: "👨🏿‍💼",
        phone: "+234 812 345 6789"
      },
      images: ["https://images.unsplash.com/photo-1649972904349-6e44c42644a7"],
      features: ["Swimming Pool", "Gym", "Security", "Parking", "Generator"]
    },
    {
      id: 2,
      title: "Modern 4-Bedroom Duplex",
      location: "Lekki Phase 1, Lagos",
      price: "₦4,200,000",
      period: "per annum",
      type: "Duplex",
      bedrooms: 4,
      bathrooms: 3,
      area: "200 sqm",
      status: "Old",
      agent: "Agent",
      landlord: {
        name: "Mrs. Kemi Adeyemi",
        avatar: "👩🏿‍💼",
        phone: "+234 813 456 7890"
      },
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"],
      features: ["Garden", "BQ", "Security", "Parking", "CCTV"]
    },
    {
      id: 3,
      title: "Executive 2-Bedroom Flat",
      location: "Ikeja GRA, Lagos",
      price: "₦1,800,000",
      period: "per annum",
      type: "Flat",
      bedrooms: 2,
      bathrooms: 2,
      area: "85 sqm",
      status: "New",
      agent: "Direct Landlord",
      landlord: {
        name: "Dr. Chuka Okafor",
        avatar: "👨🏿‍⚕️",
        phone: "+234 814 567 8901"
      },
      images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"],
      features: ["Fitted Kitchen", "AC", "Security", "Parking"]
    },
    {
      id: 4,
      title: "5-Bedroom Detached House",
      location: "Maitama, Abuja",
      price: "₦8,500,000",
      period: "per annum",
      type: "Detached House",
      bedrooms: 5,
      bathrooms: 4,
      area: "350 sqm",
      status: "Old",
      agent: "Agent",
      landlord: {
        name: "Alhaji Musa Ibrahim",
        avatar: "👨🏿‍💼",
        phone: "+234 815 678 9012"
      },
      images: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"],
      features: ["Swimming Pool", "Garden", "BQ", "Security", "Parking", "Generator"]
    },
    {
      id: 5,
      title: "Studio Apartment",
      location: "Surulere, Lagos",
      price: "₦800,000",
      period: "per annum",
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      area: "35 sqm",
      status: "New",
      agent: "Direct Landlord",
      landlord: {
        name: "Miss Funmi Ogundimu",
        avatar: "👩🏿‍💻",
        phone: "+234 816 789 0123"
      },
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"],
      features: ["Fitted Kitchen", "AC", "Security"]
    },
    {
      id: 6,
      title: "3-Bedroom Terraced House",
      location: "Ajah, Lagos",
      price: "₃,200,000",
      period: "per annum",
      type: "Terraced House",
      bedrooms: 3,
      bathrooms: 2,
      area: "140 sqm",
      status: "Old",
      agent: "Agent",
      landlord: {
        name: "Mr. Emeka Nwankwo",
        avatar: "👨🏿‍🔧",
        phone: "+234 817 890 1234"
      },
      images: ["https://images.unsplash.com/photo-1500375592092-40eb2168fd21"],
      features: ["Garden", "Parking", "Security", "Generator"]
    }
  ];

  const PropertyCard = ({ property }: { property: any }) => (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className={property.status === 'New' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}>
            {property.status}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white text-gray-700">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute bottom-4 right-4">
          <Badge className="bg-white/90 text-gray-700">
            {property.agent}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>
            <div className="text-2xl font-bold text-green-600">
              {property.price} <span className="text-sm text-gray-500">{property.period}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center space-x-1">
              <Bed className="w-4 h-4" />
              <span className="text-sm">{property.bedrooms} bed</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="w-4 h-4" />
              <span className="text-sm">{property.bathrooms} bath</span>
            </div>
            <div className="flex items-center space-x-1">
              <Square className="w-4 h-4" />
              <span className="text-sm">{property.area}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, 3).map((feature: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {property.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{property.features.length - 3} more
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{property.landlord.avatar}</div>
              <div>
                <div className="font-medium text-gray-900 text-sm">{property.landlord.name}</div>
                <div className="text-xs text-gray-500">{property.agent}</div>
              </div>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              onClick={() => handleContactLandlord(property.landlord.phone, property.landlord.name)}
            >
              <Phone className="w-4 h-4 mr-1" />
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Find Your Perfect
              <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent"> Property</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover thousands of verified properties across Nigeria with detailed information and direct landlord contact.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-grow">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Search properties by location, type, or keywords..."
                      className="pl-10 h-12"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select value={filters.type} onValueChange={(value) => setFilters({...filters, type: value})}>
                    <SelectTrigger className="w-full sm:w-40 h-12">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="duplex">Duplex</SelectItem>
                      <SelectItem value="flat">Flat</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                    <SelectTrigger className="w-full sm:w-40 h-12">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lagos">Lagos</SelectItem>
                      <SelectItem value="abuja">Abuja</SelectItem>
                      <SelectItem value="portharcourt">Port Harcourt</SelectItem>
                      <SelectItem value="kano">Kano</SelectItem>
                      <SelectItem value="ibadan">Ibadan</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={filters.priceRange} onValueChange={(value) => setFilters({...filters, priceRange: value})}>
                    <SelectTrigger className="w-full sm:w-40 h-12">
                      <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1000000">₦0 - ₦1M</SelectItem>
                      <SelectItem value="1000000-3000000">₦1M - ₦3M</SelectItem>
                      <SelectItem value="3000000-5000000">₦3M - ₦5M</SelectItem>
                      <SelectItem value="5000000+">₦5M+</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button className="h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Header */}
      <section className="pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Available Properties</h2>
              <p className="text-gray-600">{properties.length} properties found</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-8"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="h-8"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={viewMode === 'grid' ? 'grid lg:grid-cols-3 md:grid-cols-2 gap-8' : 'space-y-6'}>
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
