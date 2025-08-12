"use client"

import { useState, useEffect } from 'react'

const images = [
  '/images/ibiza-casa-azul-paradisio-18.webp',
  '/images/ibiza-casa-azul-paradisio-31.webp',
  '/images/ibiza-casa-azul-paradisio-34.webp'
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
      ))}

      
              <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="border-2 border-[#020b46] bg-black bg-opacity-50 px-4 md:px-8 py-6 md:py-8 text-center text-[#f9f7f2] max-w-6xl mx-4 md:mx-8">
          <h2 className="text-4xl md:text-6xl mb-6 text-[#f9f7f2] uppercase whitespace-nowrap" style={{ textShadow: '0 0 10px #020b46, 0 0 20px #020b46, 0 0 30px #020b46, 2px 2px 0 #020b46' }}>Casa Azul Ibiza</h2>
          <p className="text-lg text-[#f9f7f2] font-light uppercase mb-8">
            Réservez votre séjour à partir de 120 €
          </p>
          <a 
            href="#reserver" 
            className="inline-block px-8 py-2 bg-[#020b46] border border-[#f9f7f2] text-[#f9f7f2] font-medium uppercase hover:bg-[#f9f7f2] hover:border-[#020b46] hover:text-[#020b46] transition-all duration-300 cursor-pointer rounded-none"
          >
            Réserver
          </a>
        </div>
      </div>
    </div>
  )
}
