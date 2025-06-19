"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Star, Clock, Award } from "lucide-react"

const features = [
  {
    icon: <Crown className="h-8 w-8 text-white" />,
    title: "Royal Recipes",
    description: "Traditional Nawabi dishes prepared with royal heritage and pride.",
    bg: "from-[#d4af37] via-[#f9e79f] to-[#d4af37]",
  },
  {
    icon: <Star className="h-8 w-8 text-white" />,
    title: "Premium Quality",
    description: "Only the best handpicked spices and freshest ingredients.",
    bg: "from-[#c084fc] via-[#e9d5ff] to-[#c084fc]",
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    title: "Open Late",
    description: "Open till 2 AM every day — for those late-night royal cravings.",
    bg: "from-[#60a5fa] via-[#bfdbfe] to-[#60a5fa]",
  },
  {
    icon: <Award className="h-8 w-8 text-white" />,
    title: "Award Winning",
    description: "Melbourne’s most celebrated Indian fine-dining destination.",
    bg: "from-[#34d399] via-[#a7f3d0] to-[#34d399]",
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/img.jpg?height=1080&width=1920')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <Crown className="h-16 w-16 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Taste The Royal Flavors of India</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Authentic Hyderabadi & Indian Cuisine in the Heart of Melbourne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-semibold text-lg px-8 py-3">
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-orange-300 hover:bg-yellow-400 hover:text-red-900 font-semibold text-lg px-8 py-3">
              <Link href="/order">Order Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 font-semibold text-lg px-8 py-3">
              <Link href="/contact">Book a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-24 bg-[#fff8e1] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/mughal-pattern.png')] bg-repeat opacity-5 z-0 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-[#1c130b] tracking-wide mb-6 drop-shadow">
              Why Choose <span className="text-[#D3AB66]">Nizam’s?</span>
            </h2>
            <p className="text-xl text-[#4b2f19] max-w-3xl mx-auto leading-relaxed">
              Discover the royal experience of Hyderabadi cuisine, rooted in tradition and served with grandeur.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((f, i) => (
              <div key={i} className={`bg-gradient-to-br ${f.bg} p-1 rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105 group`}>
                <div className="bg-white rounded-[22px] p-6 h-full text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1c130b] to-[#4b2f19] mb-5 mx-auto shadow-lg group-hover:rotate-[10deg] transform transition-transform duration-300">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1c130b] mb-2">{f.title}</h3>
                  <p className="text-[#4b2f19] text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-[#fff8e1] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/mughal-pattern.png')] opacity-5 z-0 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1c130b] mb-4 drop-shadow">
              Our <span className="text-[#D3AB66]">Specialties</span>
            </h2>
            <p className="text-lg text-[#4b2f19] max-w-2xl mx-auto leading-relaxed">
              Discover our signature dishes that bring the royal flavors of Hyderabad to your table.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Dish Cards */}
            {[
              { img: "/briyani1.jpg", title: "Hyderabadi Biryani", desc: "Aromatic basmati rice layered with tender meat and exotic royal spices." },
              { img: "/tanddori.jpg", title: "Tandoori Delights", desc: "Marinated meats and vegetables grilled in our traditional clay oven." },
              { img: "/br.jpg", title: "Royal Briyani", desc: "Rich, flavorful curries made with heritage spices and timeless techniques." },
            ].map((dish, idx) => (
              <Card key={idx} className="overflow-hidden rounded-3xl border border-[#D3AB66] hover:shadow-2xl transition-transform hover:scale-105 bg-white">
                <img src={dish.img} alt={dish.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-[#1c130b] mb-2">{dish.title}</h3>
                  <p className="text-[#4b2f19] mb-4 text-sm">{dish.desc}</p>
                  <Button asChild variant="outline" className="border-[#1c130b] text-[#1c130b] hover:bg-[#1c130b] hover:text-white">
                    <Link href="/menu">View Menu</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#070402] to-[#1c130b] text-white text-center relative">
        <div className="absolute inset-0 bg-[url('/texture-light.png')] opacity-10 z-0 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#D3AB66] drop-shadow-sm">
            Ready to Experience Royal Flavors?
          </h2>
          <p className="text-xl mb-10 text-[#fefce8]">
            Book your table now or order online for a memorable dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#D3AB66] hover:bg-[#c9a54e] text-[#1c130b] font-semibold text-lg px-8 py-3 rounded-full shadow-md">
              <Link href="/contact">Book a Table</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#D3AB66] text-[#D3AB66] hover:bg-[#D3AB66] hover:text-[#1c130b] font-semibold text-lg px-8 py-3 rounded-full shadow-md">
              <Link href="/order">Order Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
