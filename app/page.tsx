"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomePage from "@/components/home-page"
import MenuPage from "@/components/menu-page"
import AboutPage from "@/components/about-page"
import ContactPage from "@/components/contact-page"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/order" element={<MenuPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
