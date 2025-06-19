"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Crown } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Crown className="h-12 w-12 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
            Contact<span className="text-[#D3AB66]"> Us</span>{" "}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to book a table, place an order, or ask any
            questions about our royal cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="transition-transform hover:scale-[1.02] hover:shadow-xl border border-yellow-200">
              <CardHeader className="border-b pb-3">
                <CardTitle className="flex items-center gap-2 text-xl text-red-900">
                  <MapPin className="h-6 w-6 text-yellow-500" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 text-gray-800 text-base leading-relaxed space-y-1">
                <p>Shop No.5, 8/520 - 528 Victoria Street</p>
                <p>North Melbourne, VIC 3051</p>
                <p>Australia</p>
              </CardContent>
            </Card>

            <Card className="transition-transform hover:scale-[1.02] hover:shadow-xl border border-yellow-200">
              <CardHeader className="border-b pb-3">
                <CardTitle className="flex items-center gap-2 text-xl text-red-900">
                  <Phone className="h-6 w-6 text-yellow-500" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 text-gray-800">
                <p className="text-lg font-semibold">03 9077 1073</p>
                <p className="text-sm text-gray-600 mt-1">
                  Call us for reservations or takeaway orders.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-transform hover:scale-[1.02] hover:shadow-xl border border-yellow-200">
              <CardHeader className="border-b pb-3">
                <CardTitle className="flex items-center gap-2 text-xl text-red-900">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 text-gray-800">
                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span className="font-medium">Lunch:</span>
                    <span className="text-gray-600">11:30 AM – 3:00 PM</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="font-medium">Dinner:</span>
                    <span className="text-gray-600">5:30 PM – 2:00 AM</span>
                  </div>

                  <div className="mt-4 bg-yellow-100 border border-yellow-300 rounded-lg p-4 shadow-inner text-center">
                    <p className="text-sm text-red-900 font-semibold">
                      Open 7 Days a Week – Late Night Dining Available!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="transition-transform hover:scale-[1.02] hover:shadow-xl border border-yellow-200">
  <CardHeader className="border-b pb-3">
    <CardTitle className="flex items-center gap-2 text-xl text-red-900">
      <MapPin className="h-6 w-6 text-yellow-500" />
      Find Us
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="rounded-xl overflow-hidden shadow-inner">
      <iframe
        title="Nizam's Indian Restaurant Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.955755432989!2d144.95141817629015!3d-37.800280671978595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642dd4714c6a3%3A0x70a329aa19b7b97f!2s8%2F520%20Victoria%20St%2C%20North%20Melbourne%20VIC%203051%2C%20Australia!5e0!3m2!1sen!2sin!4v1718795325627!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-64 md:h-72 lg:h-80"
      ></iframe>
    </div>
  </CardContent>
</Card>

          </div>

          {/* Contact Form */}
          <div>
            <Card className="transition-transform hover:scale-[1.02] hover:shadow-xl border border-yellow-200">
              <CardHeader className="border-b pb-3">
                <CardTitle className="flex items-center gap-2 text-xl text-red-900">
                  <Mail className="h-6 w-6 text-yellow-500" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-4">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your inquiry, reservation, or feedback..."
                      className="w-full resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-red-900 hover:bg-red-800 text-white font-semibold py-3 transition-colors duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Call Now Button */}
              <Button
                asChild
                className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm"
              >
                <a href="tel:0390771073" className="w-full text-center">
                  Call Now
                </a>
              </Button>

              {/* View Menu Button */}
              <Button
                asChild
                variant="outline"
                className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm"
              >
                <a href="/menu" className="w-full text-center">
                  View Menu
                </a>
              </Button>
            </div>

            <Card className="mt-8 bg-red-900 text-white rounded-xl shadow-md transition-transform hover:scale-[1.01]">
              <CardHeader className="border-b border-red-700 pb-3">
                <CardTitle className="text-yellow-400 text-xl flex items-center gap-2">
                  🎁 Special Offers
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-4 space-y-5">
                <div className="space-y-1">
                  <h4 className="font-semibold text-yellow-400 text-lg">
                    Group Bookings
                  </h4>
                  <p className="text-sm text-gray-200">
                    Book for <span className="font-semibold">8+ people</span>{" "}
                    and get <span className="font-semibold">10% off</span> your
                    total bill.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold text-yellow-400 text-lg">
                    Late Night Special
                  </h4>
                  <p className="text-sm text-gray-200">
                    <span className="font-semibold">20% off</span> all orders
                    after <span className="font-semibold">11:00 PM</span>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
