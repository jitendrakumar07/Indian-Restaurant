"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname() // ✅ Replaces useLocation()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-gradient-to-b from-[#4b2f19] to-[#1c130b] via-[#372213] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-yellow-400" />
            <div className="text-white">
              <h1 className="text-xl font-bold">Nizam's</h1>
              <p className="text-xs text-yellow-200">Indian Restaurant</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ease-in-out rounded-md
                  ${
                    isActive(item.href)
                      ? "text-[#D3AB66] bg-[#372213] shadow-inner"
                      : "text-white hover:text-[#D3AB66] hover:bg-[#4b2f19]"
                  }
                  before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:bg-[#D3AB66] before:transition-all before:duration-300 hover:before:w-full
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#1c130b] font-semibold">
              <Link href="/order">Order Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-[#4b2f19]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-yellow-400 bg-[#372213]"
                      : "text-white hover:text-yellow-400 hover:bg-[#4b2f19]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-[#1c130b] font-semibold mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/order">Order Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
