"use client"

import { MapPin, Clock, Star, Heart, Coffee, Utensils, Music, Beach } from 'lucide-react'

export default function IbizaBonPlanPage() {
  const recommendations = [
    {
      category: "Restaurants",
      icon: <Utensils className="w-6 h-6" />,
      items: [
        {
          name: "Sa Capella",
          description: "Restaurant gastronomique dans une chapelle du XVIe siècle",
          location: "San Antonio",
          rating: 4.8,
          price: "€€€"
        },
        {
          name: "Es Xarcu",
          description: "Fruits de mer frais avec vue sur la mer",
          location: "Cala Xarraca",
          rating: 4.6,
          price: "€€"
        },
        {
          name: "Can Pujol",
          description: "Cuisine traditionnelle ibicenca authentique",
          location: "San Antonio",
          rating: 4.7,
          price: "€€"
        }
      ]
    },
    {
      category: "Plages",
      icon: <Beach className="w-6 h-6" />,
      items: [
        {
          name: "Cala Salada",
          description: "Eaux cristallines et rochers impressionnants",
          location: "San Antonio",
          rating: 4.9,
          price: "Gratuit"
        },
        {
          name: "Cala Gració",
          description: "Plage familiale avec eaux peu profondes",
          location: "San Antonio",
          rating: 4.5,
          price: "Gratuit"
        },
        {
          name: "Cala Bassa",
          description: "Une des plus belles plages de l'île",
          location: "San Antonio",
          rating: 4.8,
          price: "Gratuit"
        }
      ]
    },
    {
      category: "Cafés & Bars",
      icon: <Coffee className="w-6 h-6" />,
      items: [
        {
          name: "Café del Mar",
          description: "Légendaire pour ses couchers de soleil",
          location: "San Antonio",
          rating: 4.7,
          price: "€€"
        },
        {
          name: "Mambo",
          description: "Bar de plage avec musique live",
          location: "San Antonio",
          rating: 4.6,
          price: "€€"
        },
        {
          name: "Sunset Ashram",
          description: "Vibes hippies et couchers de soleil magiques",
          location: "Cala Conta",
          rating: 4.8,
          price: "€€"
        }
      ]
    },
    {
      category: "Sorties",
      icon: <Music className="w-6 h-6" />,
      items: [
        {
          name: "Pacha",
          description: "Club mythique d'Ibiza",
          location: "Ibiza Town",
          rating: 4.5,
          price: "€€€"
        },
        {
          name: "Ushuaïa",
          description: "Club en plein air avec piscine",
          location: "Playa d'en Bossa",
          rating: 4.6,
          price: "€€€"
        },
        {
          name: "Amnesia",
          description: "Temple de la musique électronique",
          location: "San Rafael",
          rating: 4.7,
          price: "€€€"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-primaryBg">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4" style={{ textShadow: '0 0 10px #020b46, 0 0 20px #020b46, 0 0 30px #020b46, 2px 2px 0 #020b46' }}>
            IBIZA BON PLAN
          </h1>
          <p className="text-xl font-light">Nos meilleures adresses et conseils</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-primaryText mb-6">Découvrez Ibiza comme un local</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Nous avons sélectionné pour vous les meilleures adresses d'Ibiza : restaurants authentiques, 
          plages secrètes, bars légendaires et lieux de sortie incontournables. 
          Vivez l'expérience ibicenca authentique.
        </p>
      </div>

      {/* Recommendations */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {recommendations.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#020b46] rounded-full flex items-center justify-center">
                  <div className="text-[#f9f7f2]">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primaryText">{category.category}</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-lg border border-[#020b46] overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-primaryText">{item.name}</h4>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-[#020b46]" />
                        <span className="text-sm text-gray-600">{item.location}</span>
                      </div>
                      <span className="text-sm font-medium text-[#020b46] bg-[#f9f7f2] px-3 py-1 rounded-full">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Conseils pratiques */}
      <div className="bg-white border-t border-[#020b46]">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-primaryText text-center mb-12">Conseils pratiques</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#020b46] rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#f9f7f2]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primaryText mb-2">Meilleure période</h3>
                  <p className="text-gray-600">Mai à octobre pour le soleil, juin à septembre pour l'ambiance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#020b46] rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-[#f9f7f2]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primaryText mb-2">Réservations</h3>
                  <p className="text-gray-600">Réservez vos restaurants 2-3 jours à l'avance en haute saison</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#020b46] rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#f9f7f2]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primaryText mb-2">Transport</h3>
                  <p className="text-gray-600">Location de voiture recommandée pour explorer l'île</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#020b46] rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-[#f9f7f2]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primaryText mb-2">Notre sélection</h3>
                  <p className="text-gray-600">Tous nos conseils sont testés et approuvés par notre équipe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
