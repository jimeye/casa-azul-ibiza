import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primaryBg">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4" style={{ textShadow: '0 0 10px #020b46, 0 0 20px #020b46, 0 0 30px #020b46, 2px 2px 0 #020b46' }}>
            CONTACT
          </h1>
          <p className="text-xl font-light">Nous sommes là pour vous accueillir</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Informations de contact */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primaryText mb-6">Casa Azul Ibiza</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#020b46] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#f9f7f2]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primaryText mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    Calle del Mar, 123<br />
                    07820 San Antonio<br />
                    Ibiza, Espagne
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#020b46] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#f9f7f2]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primaryText mb-2">Téléphone</h3>
                  <p className="text-gray-600">+34 971 123 456</p>
                  <p className="text-gray-600">+34 600 123 456 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#020b46] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#f9f7f2]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primaryText mb-2">Email</h3>
                  <p className="text-gray-600">info@casaazulibiza.com</p>
                  <p className="text-gray-600">reservations@casaazulibiza.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#020b46] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#f9f7f2]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primaryText mb-2">Horaires</h3>
                  <p className="text-gray-600">Réception : 24h/24</p>
                  <p className="text-gray-600">Check-in : 15h00</p>
                  <p className="text-gray-600">Check-out : 11h00</p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-primaryText mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-[#020b46] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Instagram className="w-6 h-6 text-[#f9f7f2]" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#020b46] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-6 h-6 text-[#f9f7f2]" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-[#020b46]">
            <h2 className="text-2xl font-bold text-primaryText mb-6">Envoyez-nous un message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#020b46] focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#020b46] focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#020b46] focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#020b46] focus:border-transparent"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#020b46] focus:border-transparent">
                  <option value="">Choisissez un sujet</option>
                  <option value="reservation">Réservation</option>
                  <option value="information">Demande d'information</option>
                  <option value="feedback">Avis et commentaires</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#020b46] focus:border-transparent"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#020b46] text-[#f9f7f2] py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>

        {/* Carte */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-primaryText mb-8 text-center">Notre localisation</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-[#020b46]" />
              <p className="text-lg">Carte interactive</p>
              <p className="text-sm">Calle del Mar, 123 - San Antonio, Ibiza</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
