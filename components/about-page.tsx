import { Card, CardContent } from "@/components/ui/card"
import { Crown, Clock, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 px-4">
  <div className="flex justify-center mb-5">
    <Crown className="h-12 w-12 text-yellow-500 animate-pulse" />
  </div>
  <h1 className="text-4xl md:text-5xl font-extrabold text-red-900 tracking-tight mb-4">
    Our Story
  </h1>
  <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
    Bringing the royal flavors of Hyderabad to Melbourne — a celebration of heritage, hospitality, and timeless taste.
  </p>
</div>


       {/* Main Story */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
  {/* Text Section */}
  <div>
    <h2 className="text-3xl md:text-4xl font-extrabold text-red-900 mb-6">
      The Royal Heritage
    </h2>
    <div className="space-y-5 text-gray-700 text-base leading-relaxed">
      <p>
        Nizam's Indian Restaurant was born from a passion to share the authentic flavors of Hyderabadi cuisine with Melbourne.
        Our journey began with a simple mission: to recreate the royal dining experience of the Nizams of Hyderabad in the heart of Australia.
      </p>
      <p>
        The Hyderabadi cuisine, also known as Nizami cuisine, has its roots in the royal kitchens of the Nizams who ruled the princely state of Hyderabad.
        This cuisine is a beautiful blend of Mughlai, Turkish, and Arabic influences, creating dishes that are rich in flavor and steeped in history.
      </p>
      <p>
        Our chefs have mastered the traditional techniques passed down through generations, ensuring that every dish we serve carries the authentic taste of royal Hyderabad.
        From our signature Hyderabadi Dum Biryani to our tender Haleem, each recipe tells a story of culinary excellence.
      </p>
    </div>
  </div>

  {/* Visual / Image Section */}
  <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-600 opacity-90"></div>
    <div className="absolute inset-0 flex items-center justify-center px-6 text-white text-center">
      <div>
        <h3 className="text-2xl font-bold mb-2">Experience the Taste of Royalty</h3>
        <p className="text-sm opacity-90">
          Tradition. Flavor. Legacy.
        </p>
      </div>
    </div>
  </div>
</div>

       {/* Features */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
  {/* Feature Item */}
  {[
    {
      icon: <Crown className="h-12 w-12 text-yellow-500 mx-auto mb-4" />,
      title: "Royal Recipes",
      desc: "Authentic recipes from the royal kitchens of Hyderabad, prepared with traditional methods.",
    },
    {
      icon: <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />,
      title: "Open Till 2AM",
      desc: "We understand Melbourne's late-night dining culture and serve delicious food until 2:00 AM.",
    },
    {
      icon: <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />,
      title: "Group Dining",
      desc: "Special group biryani offers perfect for family gatherings and celebrations.",
    },
    {
      icon: <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />,
      title: "Quality Assured",
      desc: "Only the finest ingredients and spices sourced directly from India for authentic flavors.",
    },
  ].map((feature, index) => (
    <Card
      key={index}
      className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-yellow-100 bg-white"
    >
      <CardContent className="p-6">
        {feature.icon}
        <h3 className="text-xl font-semibold text-red-900 mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
      </CardContent>
    </Card>
  ))}
</div>


       {/* Hyderabadi Culture Section */}
<div className="bg-white rounded-2xl shadow-md p-10 mb-20">
  <h2 className="text-3xl md:text-4xl font-extrabold text-red-900 mb-10 text-center">
    The Hyderabadi Food Culture
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-700">
    {/* Left Column */}
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-red-900 mb-2">Dum Cooking Technique</h3>
        <p>
          The hallmark of Hyderabadi cuisine is the <strong>'Dum'</strong> style of cooking, where food is cooked in sealed pots
          over slow fire. This technique allows the ingredients to cook in their own juices, creating incredibly
          flavorful and aromatic dishes.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-red-900 mb-2">The Art of Biryani</h3>
        <p>
          Hyderabadi Biryani is not just a dish; it's an art form. The rice and meat are cooked separately and
          then layered with saffron, fried onions, and aromatic spices before being sealed and cooked on <em>dum</em>.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-red-900 mb-2">Royal Hospitality</h3>
        <p>
          The Nizams were known for their hospitality, and this tradition continues in our restaurant. We believe
          in treating every guest like royalty, ensuring a memorable dining experience.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-red-900 mb-2">Spice Mastery</h3>
        <p>
          Our spice blends are carefully crafted using traditional recipes. Each spice is roasted and ground to
          perfection, creating the complex flavor profiles that Hyderabadi cuisine is famous for.
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Call to Action */}
       <div className="bg-red-900 text-white rounded-2xl p-10 text-center shadow-lg">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Experience Royal Dining</h2>
  <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto">
    Join us for an authentic Hyderabadi dining experience that will transport you to the royal courts of the Nizams.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="/contact"
      className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow"
    >
      Book a Table
    </a>
    <a
      href="/menu"
      className="border border-white text-white hover:bg-white hover:text-red-900 font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow"
    >
      View Our Menu
    </a>
  </div>
</div>

      </div>
    </div>
  )
}
