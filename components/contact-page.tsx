"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Mail, Crown } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Crown className="h-12 w-12 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to book a table, place an order, or ask any questions about our royal cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-900">
                  <MapPin className="h-5 w-5 text-yellow-500" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Shop No.5, 8/520 - 528 Victoria Street
                  <br />
                  North Melbourne, VIC 3051
                  <br />
                  Australia
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-900">
                  <Phone className="h-5 w-5 text-yellow-500" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg font-semibold">03 9077 1073</p>
                <p className="text-sm text-gray-600 mt-1">Call us for reservations or takeaway orders</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-900">
                  <Clock className="h-5 w-5 text-yellow-500" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Lunch:</span>
                    <span className="text-gray-600">11:30 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Dinner:</span>
                    <span className="text-gray-600">5:30 PM - 2:00 AM</span>
                  </div>
                  <div className="mt-3 p-3 bg-yellow-100 rounded-md">
                    <p className="text-sm text-red-900 font-medium">
                      Open 7 days a week - Late night dining available!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-red-900">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-yellow-200 to-red-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-red-900 mx-auto mb-2" />
                    <p className="text-red-900 font-semibold">Interactive Map</p>
                    <p className="text-sm text-gray-600">Victoria Street, North Melbourne</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-900">
                  <Mail className="h-5 w-5 text-yellow-500" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full"
                      placeholder="Tell us about your inquiry, reservation request, or feedback..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-900 hover:bg-red-800 text-white font-semibold py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-semibold py-3">
                <a href="tel:0390771073">Call Now</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-red-900 text-red-900 hover:bg-red-900 hover:text-white font-semibold py-3"
              >
                <a href="/menu">View Menu</a>
              </Button>
            </div>

            {/* Special Offers */}
            <Card className="mt-8 bg-red-900 text-white">
              <CardHeader>
                <CardTitle className="text-yellow-400">Special Offers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-yellow-400">Group Bookings</h4>
                    <p className="text-sm text-gray-200">Book for 8+ people and get 10% off your total bill</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400">Late Night Special</h4>
                    <p className="text-sm text-gray-200">20% off all orders after 11:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
