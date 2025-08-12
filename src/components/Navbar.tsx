"use client"

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { name: 'HOME', href: '#home', description: 'Page d\'accueil' },
    { name: 'RESERVER', href: '#reserver', description: 'Réserver votre séjour' },
    { name: 'CHAMBRES', href: '#chambres', description: 'Découvrir nos chambres' },
    { name: 'IBIZA BON PLAN', href: '#ibiza-bon-plan', description: 'Conseils et adresses' },
    { name: 'CONTACT', href: '#contact', description: 'Nous contacter' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Afficher la navbar si on est en haut de page ou si on scroll vers le haut
      if (currentScrollY < 100 || currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#f9f7f2] uppercase" style={{ textShadow: '0 0 10px #020b46, 0 0 20px #020b46, 0 0 30px #020b46, 2px 2px 0 #020b46' }}>
              Casa Azul Ibiza
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#f9f7f2] hover:text-white transition-colors duration-200 font-medium text-sm"
                  style={{ textShadow: '1px 1px 0 #020b46, -1px -1px 0 #020b46, 1px -1px 0 #020b46, -1px 1px 0 #020b46' }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#f9f7f2] hover:text-white focus:outline-none focus:text-white"
            >
              <div className="w-8 h-8 flex flex-col justify-center items-center">
                <span 
                  className={`block w-6 h-0.5 bg-[#f9f7f2] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}
                  style={{ boxShadow: '0 0 3px #020b46' }}
                ></span>
                <span 
                  className={`block w-6 h-0.5 bg-[#f9f7f2] transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                  style={{ boxShadow: '0 0 3px #020b46' }}
                ></span>
                <span 
                  className={`block w-6 h-0.5 bg-[#f9f7f2] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}
                  style={{ boxShadow: '0 0 3px #020b46' }}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-transparent rounded-b-lg">
            {navItems.map((item) => (
                              <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-[#f9f7f2] hover:text-white transition-colors duration-200 font-medium text-sm text-right"
                  style={{ textShadow: '1px 1px 0 #020b46, -1px -1px 0 #020b46, 1px -1px 0 #020b46, -1px 1px 0 #020b46' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
