import { Card, CardContent } from "@/components/ui/card"
import { Crown, Clock, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Crown className="h-12 w-12 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bringing the royal flavors of Hyderabad to Melbourne since our establishment.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-6">The Royal Heritage</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Nizam's Indian Restaurant was born from a passion to share the authentic flavors of Hyderabadi cuisine
                with Melbourne. Our journey began with a simple mission: to recreate the royal dining experience of the
                Nizams of Hyderabad in the heart of Australia.
              </p>
              <p>
                The Hyderabadi cuisine, also known as Nizami cuisine, has its roots in the royal kitchens of the Nizams
                who ruled the princely state of Hyderabad. This cuisine is a beautiful blend of Mughlai, Turkish, and
                Arabic influences, creating dishes that are rich in flavor and steeped in history.
              </p>
              <p>
                Our chefs have mastered the traditional techniques passed down through generations, ensuring that every
                dish we serve carries the authentic taste of royal Hyderabad. From our signature Hyderabadi Dum Biryani
                to our tender Haleem, each recipe tells a story of culinary excellence.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-400 to-red-600 rounded-lg h-96"></div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Crown className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-900 mb-2">Royal Recipes</h3>
              <p className="text-gray-600">
                Authentic recipes from the royal kitchens of Hyderabad, prepared with traditional methods.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-900 mb-2">Open Till 2AM</h3>
              <p className="text-gray-600">
                We understand Melbourne's late-night dining culture and serve delicious food until 2:00 AM.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-900 mb-2">Group Dining</h3>
              <p className="text-gray-600">
                Special group biryani offers perfect for family gatherings and celebrations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Only the finest ingredients and spices sourced directly from India for authentic flavors.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Hyderabadi Culture Section */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-red-900 mb-6 text-center">The Hyderabadi Food Culture</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-900 mb-4">Dum Cooking Technique</h3>
              <p className="text-gray-700 mb-4">
                The hallmark of Hyderabadi cuisine is the 'Dum' style of cooking, where food is cooked in sealed pots
                over slow fire. This technique allows the ingredients to cook in their own juices, creating incredibly
                flavorful and aromatic dishes.
              </p>

              <h3 className="text-xl font-semibold text-red-900 mb-4">The Art of Biryani</h3>
              <p className="text-gray-700">
                Hyderabadi Biryani is not just a dish; it's an art form. The rice and meat are cooked separately and
                then layered together with saffron, fried onions, and aromatic spices before being sealed and cooked on
                dum.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-900 mb-4">Royal Hospitality</h3>
              <p className="text-gray-700 mb-4">
                The Nizams were known for their hospitality, and this tradition continues in our restaurant. We believe
                in treating every guest like royalty, ensuring a memorable dining experience.
              </p>

              <h3 className="text-xl font-semibold text-red-900 mb-4">Spice Mastery</h3>
              <p className="text-gray-700">
                Our spice blends are carefully crafted using traditional recipes. Each spice is roasted and ground to
                perfection, creating the complex flavor profiles that Hyderabadi cuisine is famous for.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-red-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Royal Dining</h2>
          <p className="text-xl mb-6 text-gray-200">
            Join us for an authentic Hyderabadi dining experience that will transport you to the royal courts of the
            Nizams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-semibold py-3 px-8 rounded-md transition-colors"
            >
              Book a Table
            </a>
            <a
              href="/menu"
              className="border border-white text-white hover:bg-white hover:text-red-900 font-semibold py-3 px-8 rounded-md transition-colors"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
