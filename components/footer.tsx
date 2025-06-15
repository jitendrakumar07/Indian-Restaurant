"use client"

import { Crown, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link" // ✅ Next.js Link

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#4b2f19] to-[#1c130b] via-[#372213] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-[#D3AB66]" />
              <div>
                <h3 className="text-xl font-bold text-[#D3AB66]">Nizam's Indian Restaurant</h3>
                <p className="text-sm text-white">Royal Hyderabadi Cuisine</p>
              </div>
            </div>
            <p className="text-white mb-4 leading-relaxed">
              Experience the authentic flavors of Hyderabadi and Indian cuisine in the heart of Melbourne.
              We serve royal dishes with traditional recipes passed down through generations.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D3AB66]">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#D3AB66] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white">
                  Shop No.5, 8/520 - 528 Victoria Street
                  <br />
                  North Melbourne, 3051
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#D3AB66]" />
                <p className="text-sm text-white">03 9077 1073</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D3AB66]">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-[#D3AB66] mt-0.5" />
                <div className="text-sm text-white">
                  <p className="font-medium">Lunch: 11:30 AM - 3:00 PM</p>
                  <p className="font-medium">Dinner: 5:30 PM - 2:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#372213] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Nizam's Indian Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/menu" className="text-sm text-white hover:text-[#D3AB66] transition-colors">
              Menu
            </Link>
            <Link href="/about" className="text-sm text-white hover:text-[#D3AB66] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-white hover:text-[#D3AB66] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
