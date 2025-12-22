'use client'

import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      title: 'Lezzetin Adresi',
      subtitle: 'En Taze ve Lezzetli Kaburgalar',
      description: 'Özenle seçilen etler, usta ellerde hazırlanan özel soslar ve unutulmaz tatlar...',
      buttonText: 'Menüyü İncele',
      buttonLink: '#menu',
      image: '/images/s1.png'
    },
    {
      id: 2,
      title: 'Geleneksel Lezzet',
      subtitle: 'Yılların Tecrübesi',
      description: '1995\'ten beri size hizmet veriyor, her bir lokmayı özenle hazırlıyoruz...',
      buttonText: 'Hakkımızda',
      buttonLink: '#about',
      image: '/images/s2.png'
    },
    {
      id: 3,
      title: 'Özel Günler',
      subtitle: 'Unutulmaz Anlar',
      description: 'Doğum günleri, yıldönümleri ve özel kutlamalar için ideal mekan...',
      buttonText: 'Rezervasyon Yap',
      buttonLink: '#contact',
      image: '/images/s3.png'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundColor: '#1a1a1a'
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 fade-in text-shadow">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-red-500 fade-in">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto fade-in">
            {slides[currentSlide].description}
          </p>
          <a
            href={slides[currentSlide].buttonLink}
            className="btn-primary fade-in inline-block"
          >
            {slides[currentSlide].buttonText}
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-red-500 w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero