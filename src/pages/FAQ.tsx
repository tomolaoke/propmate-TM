
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How do I list my property on PropMate?",
      answer: "Simply sign up for a free account, click on 'Add Property' from your dashboard, and fill in the property details including photos, description, rent amount, and location. Your property will be live within minutes after verification."
    },
    {
      question: "What fees does PropMate charge?",
      answer: "PropMate charges a small transaction fee of 2.5% only when rent is successfully collected. There are no upfront costs, listing fees, or monthly charges. You only pay when you earn."
    },
    {
      question: "How does the tenant screening process work?",
      answer: "Our comprehensive screening includes credit checks, employment verification, previous landlord references, and identity verification. The process typically takes 24-48 hours and costs ₦5,000 per screening."
    },
    {
      question: "Can I manage multiple properties on PropMate?",
      answer: "Yes! PropMate is designed to handle multiple properties. You can manage unlimited properties from a single dashboard, track rent payments, maintenance requests, and tenant communications all in one place."
    },
    {
      question: "How secure are the payments on PropMate?",
      answer: "We use bank-grade encryption and partner with licensed payment processors to ensure all transactions are secure. Funds are automatically transferred to your bank account within 24-48 hours of payment."
    },
    {
      question: "What happens if a tenant doesn't pay rent on time?",
      answer: "PropMate automatically sends reminder notifications before and after due dates. We also provide legal document templates and can connect you with legal professionals if needed for rent recovery."
    },
    {
      question: "Can tenants pay rent in installments?",
      answer: "Yes, tenants can set up flexible payment plans including monthly, quarterly, or annual payments. All payment schedules are clearly tracked in both landlord and tenant dashboards."
    },
    {
      question: "How do I handle maintenance requests?",
      answer: "Tenants can submit maintenance requests directly through the platform with photos and descriptions. You'll receive instant notifications and can track the status, assign vendors, and communicate with tenants about repairs."
    },
    {
      question: "Is PropMate available in all Nigerian states?",
      answer: "Currently, PropMate operates in Lagos, Abuja, Port Harcourt, Kano, and Ibadan. We're rapidly expanding to cover all major cities across Nigeria. Contact us if you'd like to see PropMate in your city."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our support team 24/7 through live chat, email at hello@propmate.ng, or call +234 803 909 3482. We also have physical offices in Lagos, Abuja, and Port Harcourt."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Link to="/contact" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Contact
            </Link>
            <Badge className="bg-gradient-to-r from-green-100 to-orange-100 text-green-800 border-0 px-4 py-2 rounded-full mb-6">
              FAQ
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent"> Questions</span>
            </h1>
            <p className="text-xl text-gray-600">
              Find quick answers to the most common questions about PropMate.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
