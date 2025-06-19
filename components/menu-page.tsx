"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Flame, Leaf } from "lucide-react";

const menuData = {
  Entrées: [
    {
      name: "Samosa (2 pieces)",
      description: "Crispy pastry filled with spiced potatoes and peas",
      price: "$8.90",
      image: "/Samosa.jpg"
    },
    {
      name: "Onion Bhaji",
      description: "Deep-fried onion fritters with aromatic spices",
      price: "$9.90",
      image: "/Onion Bhaji.jpg"
    },
    {
      name: "Chicken Tikka (4 pieces)",
      description: "Tender chicken marinated in yogurt and spices",
      price: "$12.90",
      image: "/Chicken Tikka.jpg"
    },
    {
      name: "Seekh Kebab",
      description: "Minced lamb skewers with traditional spices",
      price: "$13.90",
      image: "/Seekh Kebab.jpg"
    }
  ],
  "Tandoori Dishes": [
    {
      name: "Tandoori Chicken (Half)",
      description: "Marinated chicken cooked in clay oven",
      price: "$18.90",
      spicy: true,
      image: "/Tandoori Chicken (Half).jpg"
    },
    {
      name: "Tandoori Chicken (Full)",
      description: "Whole chicken marinated and tandoor cooked",
      price: "$32.90",
      spicy: true,
      image: "/Tandoori Chicken (Full).jpg"
    },
    {
      name: "Chicken Tikka",
      description: "Boneless chicken pieces in tandoor",
      price: "$22.90",
      image: "/Chicken Tikka1.jpg"
    },
    {
      name: "Lamb Tikka",
      description: "Tender lamb pieces marinated and grilled",
      price: "$24.90",
      image: "https://picsum.photos/seed/lambtikka/640/480"
    },
    {
      name: "Mixed Grill",
      description: "Assorted tandoori meats and vegetables",
      price: "$28.90",
      signature: true,
      image: "https://picsum.photos/seed/mixedgrill/640/480"
    }
  ],
  "Chicken Dishes": [
    {
      name: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken",
      price: "$19.90",
      signature: true,
      image: "https://picsum.photos/seed/butterchicken/640/480"
    },
    {
      name: "Chicken Korma",
      description: "Mild coconut and cashew curry",
      price: "$19.90",
      image: "https://picsum.photos/seed/chickenkorma/640/480"
    },
    {
      name: "Chicken Vindaloo",
      description: "Spicy Goan-style curry with potatoes",
      price: "$19.90",
      spicy: true,
      image: "https://picsum.photos/seed/chickenvindaloo/640/480"
    },
    {
      name: "Chicken Saag",
      description: "Chicken cooked with spinach and spices",
      price: "$19.90",
      image: "https://picsum.photos/seed/chickensaag/640/480"
    },
    {
      name: "Chicken Madras",
      description: "South Indian style spicy curry",
      price: "$19.90",
      spicy: true,
      image: "https://picsum.photos/seed/chickenmadras/640/480"
    }
  ],
  "Lamb Dishes": [
    {
      name: "Lamb Rogan Josh",
      description: "Traditional Kashmiri lamb curry",
      price: "$22.90",
      signature: true,
      image: "https://picsum.photos/seed/lambroganjosh/640/480"
    },
    {
      name: "Lamb Korma",
      description: "Mild creamy curry with aromatic spices",
      price: "$22.90",
      image: "https://picsum.photos/seed/lambkorma/640/480"
    },
    {
      name: "Lamb Saag",
      description: "Lamb cooked with fresh spinach",
      price: "$22.90",
      image: "https://picsum.photos/seed/lambsaag/640/480"
    },
    {
      name: "Lamb Vindaloo",
      description: "Fiery hot curry with potatoes",
      price: "$22.90",
      spicy: true,
      image: "https://picsum.photos/seed/lambvindaloo/640/480"
    }
  ],
  "Vegetarian Dishes": [
    {
      name: "Dal Makhani",
      description: "Creamy black lentils slow-cooked overnight",
      price: "$16.90",
      vegetarian: true,
      image: "https://picsum.photos/seed/dalmakhani/640/480"
    },
    {
      name: "Palak Paneer",
      description: "Cottage cheese in spiced spinach gravy",
      price: "$17.90",
      vegetarian: true,
      image: "https://picsum.photos/seed/palakpaneer/640/480"
    },
    {
      name: "Aloo Gobi",
      description: "Cauliflower and potatoes with spices",
      price: "$16.90",
      vegetarian: true,
      image: "https://picsum.photos/seed/aloogobi/640/480"
    },
    {
      name: "Chana Masala",
      description: "Chickpeas in spiced tomato gravy",
      price: "$16.90",
      vegetarian: true,
      image: "https://picsum.photos/seed/chana masala/640/480"
    },
    {
      name: "Paneer Makhani",
      description: "Cottage cheese in rich tomato cream sauce",
      price: "$17.90",
      vegetarian: true,
      image: "https://picsum.photos/seed/paneermakhani/640/480"
    }
  ],
  Biryani: [
    {
      name: "Chicken Biryani",
      description: "Aromatic basmati rice with spiced chicken",
      price: "$21.90",
      signature: true,
      image: "https://picsum.photos/seed/chickenbiryani/640/480"
    },
    {
      name: "Lamb Biryani",
      description: "Fragrant rice layered with tender lamb",
      price: "$24.90",
      signature: true,
      image: "https://picsum.photos/seed/lambbiryani/640/480"
    },
    {
      name: "Vegetable Biryani",
      description: "Mixed vegetables with saffron rice",
      price: "$19.90",
      vegetarian: true,
      image: "https://picsum.photos/seed/vegetablebiryani/640/480"
    },
    {
      name: "Hyderabadi Dum Biryani",
      description: "Royal style biryani cooked in sealed pot",
      price: "$26.90",
      signature: true,
      image: "https://picsum.photos/seed/dumbiryani/640/480"
    },
    {
      name: "Jumbo Chicken Biryani (Serves 4-6)",
      description: "Large portion perfect for sharing",
      price: "$65.90",
      image: "https://picsum.photos/seed/jumbochickenbiryani/640/480"
    },
    {
      name: "Jumbo Lamb Biryani (Serves 4-6)",
      description: "Family size lamb biryani",
      price: "$75.90",
      image: "https://picsum.photos/seed/jumbolambbiryani/640/480"
    }
  ],
  "Rice & Naan": [
    {
      name: "Basmati Rice",
      description: "Steamed aromatic long-grain rice",
      price: "$4.90",
      image: "https://picsum.photos/seed/basmatisrice/640/480"
    },
    {
      name: "Saffron Rice",
      description: "Basmati rice with saffron",
      price: "$6.90",
      image: "https://picsum.photos/seed/saffronrice/640/480"
    },
    {
      name: "Plain Naan",
      description: "Traditional leavened bread",
      price: "$4.50",
      image: "https://picsum.photos/seed/plainnaan/640/480"
    },
    {
      name: "Garlic Naan",
      description: "Naan topped with garlic and herbs",
      price: "$5.50",
      image: "https://picsum.photos/seed/garlicnaan/640/480"
    },
    {
      name: "Butter Naan",
      description: "Naan brushed with butter",
      price: "$5.00",
      image: "https://picsum.photos/seed/butternaan/640/480"
    },
    {
      name: "Cheese Naan",
      description: "Naan stuffed with cheese",
      price: "$6.50",
      image: "https://picsum.photos/seed/cheesenaanion/640/480"
    }
  ],
  Desserts: [
    {
      name: "Gulab Jamun (2 pieces)",
      description: "Sweet milk dumplings in sugar syrup",
      price: "$7.90",
      image: "https://picsum.photos/seed/gulabjamun/640/480"
    },
    {
      name: "Kulfi",
      description: "Traditional Indian ice cream",
      price: "$6.90",
      image: "https://picsum.photos/seed/kulfi/640/480"
    },
    {
      name: "Ras Malai",
      description: "Cottage cheese dumplings in sweet milk",
      price: "$8.90",
      image: "https://picsum.photos/seed/rasmalai/640/480"
    }
  ],
  Drinks: [
    {
      name: "Mango Lassi",
      description: "Yogurt drink with mango",
      price: "$5.90",
      image: "https://picsum.photos/seed/mangolassi/640/480"
    },
    {
      name: "Sweet Lassi",
      description: "Traditional sweet yogurt drink",
      price: "$4.90",
      image: "https://picsum.photos/seed/sweetlassi/640/480"
    },
    {
      name: "Masala Chai",
      description: "Spiced Indian tea",
      price: "$3.90",
      image: "https://picsum.photos/seed/masalachai/640/480"
    },
    {
      name: "Soft Drinks",
      description: "Coke, Sprite, Fanta",
      price: "$3.50",
      image: "https://picsum.photos/seed/softdrinks/640/480"
    }
  ]
};

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  signature?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-yellow-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Menu Sections */}
        <div className="space-y-16">
          {Object.entries(menuData).map(
            ([category, items]: [string, MenuItem[]]) => (
              <section key={category}>
                <h2 className="text-3xl font-bold text-red-900 text-center mb-8">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item: MenuItem, index: number) => (
                    <Card
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {/* Image */}
                      {item.image && (
                        <div className="overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          {/* Item Name + Icons */}
                          <CardTitle className="text-lg font-semibold text-red-900 flex items-center gap-2">
                            {item.name}
                            {item.signature && (
                              <Crown className="h-4 w-4 text-yellow-500">
                                <title>Signature Dish</title>
                              </Crown>
                            )}
                            {item.spicy && (
                              <Flame className="h-4 w-4 text-red-500">
                                <title>Spicy</title>
                              </Flame>
                            )}
                            {item.vegetarian && (
                              <Leaf className="h-4 w-4 text-green-500">
                                <title>Vegetarian</title>
                              </Leaf>
                            )}
                          </CardTitle>

                          {/* Price Badge (₹ removed) */}
                          <div className="inline-flex items-center bg-gradient-to-r from-yellow-200 to-yellow-100 text-green-600 font-bold text-sm px-4 py-1.5 rounded-full shadow-sm border border-yellow-300">
                            <span className="tracking-wide">{item.price}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="text-sm text-gray-600 px-4 pb-4 pt-1">
                        <p>{item.description}</p>
                        <div className="flex gap-2 mt-3 flex-wrap">
                          {item.signature && (
                            <Badge className="bg-yellow-500 text-red-900 text-xs px-2 py-1">
                              Chef's Special
                            </Badge>
                          )}
                          {item.spicy && (
                            <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                              Spicy
                            </Badge>
                          )}
                          {item.vegetarian && (
                            <Badge className="bg-green-600 text-white text-xs px-2 py-1">
                              Vegetarian
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )
          )}
        </div>

        {/* Weekly Specials */}
        <div className="mt-20 bg-red-900 text-white rounded-2xl py-10 px-6 sm:px-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            Weekly Specials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                Monday - Wednesday
              </h3>
              <p className="text-gray-200">20% off all Biryani dishes</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                Thursday - Sunday
              </h3>
              <p className="text-gray-200">Free dessert with any main course</p>
            </div>
          </div>
        </div>

        {/* Group Biryani Offers */}
        <div className="mt-12 bg-yellow-100 rounded-2xl py-10 px-6 sm:px-10">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-4">
            Group Biryani Offers
          </h2>
          <p className="text-center text-gray-700 text-lg mb-2">
            Perfect for family gatherings and celebrations!
          </p>
          <p className="text-center text-red-900 font-bold">
            Order any Jumbo Biryani and get 10% off your total bill
          </p>
        </div>
      </div>
    </div>
  );
}
